import functools
import io
import logging

import json
import time

from couchdb.http import ResourceNotFound

OPEN_KWARGS = {
    'mode': 'w',
    'encoding': 'utf8',
    'errors': 'strict',
    'buffering': 1
}

DOCUMENTS_TRACKED = set()


def preprocess(column):
    """
    Do a little bit of data cleaning with the help of Unidecode and Regex.
    Things like casing, extra spaces, quotes and new lines can be ignored.
    """
    import unidecode
    import re

    column = unidecode.unidecode(column)
    column = re.sub('  +', ' ', column)
    column = re.sub('\n', ' ', column)
    column = column.strip().strip('"').strip("'").lower().strip()
    if not column:
        column = None
    return column


def age_difference(date1, date2):
    from dateutil import relativedelta
    from dateutil import parser

    r = relativedelta.relativedelta(parser.parse(date2), parser.parse(date1))
    return (r.years * 12) + r.months

def get_patient_reports(db, duplicate_contact_uuid):
    resource = db.view('medic/reports_by_subject', key=duplicate_contact_uuid, include_docs=True)
    return [row.doc for row in resource if row.doc]

def extract_metadata(doc):
    if doc['type'] == 'person':
        return {
            '_id': doc['_id'],
            'external_id': doc['external_id'],
            'name': doc['name'],
            'date_of_birth': doc['date_of_birth'],
            'sex': doc['sex'],
            'type': doc['type']
        }

    name = ''
    if 'first_name' in doc['fields']['biodata']:
        name += ' ' + doc['fields']['biodata']['first_name']
    if 'name' in doc['fields']['biodata']:
        name += ' ' + doc['fields']['biodata']['name']
    if 'second_name' in doc['fields']['biodata']:
        name += ' ' + doc['fields']['biodata']['second_name']
    name = name.strip()

    return {
        '_id': doc['_id'],
        'external_id': doc['fields']['biodata']['id_code'],
        'name': name,
        'date_of_birth': doc['fields']['biodata']['contact_dob_iso'],
        'sex': doc['fields']['biodata']['sex'],
        'type': doc['type']
    }

def reassociate_report(contact, report):
    """
    patient_id,
    inputs/contact/_id
    """

    if 'contact' not in report['fields']['inputs']:
        report['fields']['inputs']['contact'] = {}

    report['fields']['inputs']['contact']['_id'] = contact['_id']
    report['fields']['patient_id'] = contact['_id']
    return report

def mark_for_deletion(doc):
    tmp = doc.copy()
    tmp['_deleted'] = True
    return tmp

def strip_revision(doc):
    tmp = doc.copy()
    if '_rev' in tmp:
        del tmp['_rev']
    return tmp

def chunker_list(seq, size):
    return (seq[i:i+size] for i in range(0, len(seq), size))

def merge(db, facility_id, community_id):
    OPEN_KWARGS['mode'] = 'a'
    with io.open('./logs/{}.log'.format(time.strftime("%Y-%m-%d-%H")), **OPEN_KWARGS) as log:
        to_update = []
        try:
            fp = db.get(facility_id, attachments=True)
            cp = db.get(community_id, attachments=True)

            # log facility document
            if fp['_id'] not in DOCUMENTS_TRACKED:
                log.write('{}\n'.format(json.dumps(fp)))

            if fp['type'] == 'data_record':
                # delete original reports
                to_update.extend(map(mark_for_deletion, [fp]))
                to_update.extend(map(strip_revision, map(functools.partial(reassociate_report, cp), [fp])))
            else:
                # fetch reports for contact
                reports = [report.doc \
                           for report in db.view('medic-client/reports_by_subject', key=[fp['_id']], include_docs=True, attachments=True) \
                           if report.doc]

                # log original reports
                for report in reports:
                    if report['_id'] not in DOCUMENTS_TRACKED:
                        log.write('{}\n'.format(json.dumps(report)))

                # delete original reports
                to_update.extend(map(mark_for_deletion, [fp]))
                to_update.extend(map(mark_for_deletion, reports))
                to_update.extend(map(strip_revision, map(functools.partial(reassociate_report, cp),reports)))
        except ResourceNotFound as e:
            logging.exception(e)
        finally:
            return to_update

