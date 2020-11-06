import io
import os
import time

from datetime import datetime

import couchdb
import dotenv

from fuzzywuzzy import fuzz
from utils import preprocess, age_difference, extract_metadata, chunker_list, merge, OPEN_KWARGS

start = datetime.now()
dry_run = False

dotenv.load_dotenv('.env')

server = couchdb.Server('https://{}:{}@{}'.format(

    os.getenv('COUCH_USER'),
    os.getenv('COUCH_PASS'),
    os.getenv('COUCH_HOST')))

couch = server[os.getenv('COUCH_DB')]

community_profiles = []
facility_profiles = []

if not os.path.exists('./results'):
    os.mkdir('./results')

for row in couch.view('medic-client/contacts_by_type', key=['person'], include_docs=True):
    if not row.doc:
        continue

    doc = row.doc
    if 'parent' in doc and 'parent' in doc['parent'] and 'parent' in doc['parent']['parent'] and '_id' in doc['parent']['parent']['parent']:
        community_profiles.append(doc)
    elif 'parent' in doc and '_id' in doc['parent'] and 'parent' not in doc['parent']:
        facility_profiles.append(doc)

# fetch new style pcime_usp
for report in couch.view('medic-client/reports_by_form', key=['pcime_usp'], endkey=['pcime_usp', None], include_docs=True, reduce=False, attachments=True):
    if not report.doc:
        continue
    doc = report.doc

    if doc['form'] == 'pcime_usp' and 'biodata' in doc['fields']:
        facility_profiles.append(doc)
        print(doc['_id'], doc['fields']['biodata']['id_code'], doc['fields']['biodata']['contact_dob_iso'])

print(len(facility_profiles), len(community_profiles))
print('Fetching done. Time elaspsed: {}'.format(datetime.now() - start))

start = datetime.now()

counts = 0

matching_pairs = []


with io.open('./results/matches.csv', **OPEN_KWARGS) as matches, io.open('./results/reviews.csv', **OPEN_KWARGS) as reviews:
    matches.write('ID,IH_ID,NAME,DOB,SEX,ID_MATCH,ID_IH_MATCH,NAME_MATCH,DOB_MATCH,SEX_MATCH\n')
    reviews.write('ID,IH_ID,NAME,DOB,SEX,ID_MATCH,ID_IH_MATCH,NAME_MATCH,DOB_MATCH,SEX_MATCH,IS_MATCH\n')

    for idx, row1 in enumerate(facility_profiles):
        for row2 in community_profiles:

            if row1['type'] == 'person' and not 'date_of_birth' in row1:
                continue
            if row2['type'] == 'person' and not 'date_of_birth' in row2:
                continue

            if row1['type'] == 'person' and row1['parent']['_id'] != row2['parent']['parent']['parent']['_id']:
                continue

            if row1['type'] == 'data_record' and row1['contact']['parent']['_id'] != row2['parent']['parent']['parent']['_id']:
               continue

            fp = extract_metadata(row1)
            cp = extract_metadata(row2)

            potential_match = False
            needs_review = False

            print('ids : {},{}'.format(fp['_id'], cp['_id']))

            if  fp['external_id'] == cp['external_id']:
                print('ids : {},{}'.format(fp['_id'], cp['_id']))
                print('dobs : {},{}'.format(fp['date_of_birth'], cp['date_of_birth']))
                if  fuzz.token_set_ratio(preprocess(fp['name']), preprocess(cp['name'])) >= 90 and \
                    age_difference(fp['date_of_birth'], cp['date_of_birth']) < 12:
                    if fp['sex'] == cp['sex']:
                        # Case 1
                        potential_match = True
                        needs_review = True
                    else:
                        # Case 3
                        # Case 4
                        needs_review = True
                elif preprocess(fp['name']) == preprocess(cp['name']) and \
                     age_difference(fp['date_of_birth'], cp['date_of_birth']) == 0 and \
                     fp['sex'] != cp['sex']:
                    # Case 2
                    potential_match = True
                    # needs_review = True
                elif preprocess(fp['name']) == preprocess(cp['name']) and \
                     age_difference(fp['date_of_birth'], cp['date_of_birth']) >= 12:
                    if fp['sex'] == cp['sex']:
                        # Case 5
                        # potential_match = True
                        needs_review = True
                    else:
                        # Case 6
                        needs_review = True
                elif 90 <= fuzz.token_set_ratio(preprocess(fp['name']), preprocess(cp['name'])) < 100 and \
                     age_difference(fp['date_of_birth'], cp['date_of_birth']) >= 12:
                    # Case 7
                    needs_review = True
                elif 70 < fuzz.token_set_ratio(preprocess(fp['name']), preprocess(cp['name'])) < 90:
                    # Age / Gender match immaterial
                    # Case 8
                    # Case 9
                    needs_review = True
                elif preprocess(fp['name']) == preprocess(cp['name']) and \
                     age_difference(fp['date_of_birth'], cp['date_of_birth']) == 0 and \
                     fp['sex'] == cp['sex']:
                    # Case 0
                    potential_match = True
            elif fp['external_id'] != cp['external_id']:
                print('ids : {},{}'.format(fp['_id'], cp['_id']))
                print('dobs : {},{}'.format(fp['date_of_birth'], cp['date_of_birth']))
                if preprocess(fp['name']) == preprocess(cp['name']):
                    if age_difference(fp['date_of_birth'], cp['date_of_birth']) < 12:
                        if fp['sex'] == cp['sex']:
                            # Case 10
                            # Case 11,
                            # Case 18
                            # potential_match = True
                            needs_review = True
                        else:
                            # Case 19
                            needs_review = True
                    else:
                        if fp['sex'] == cp['sex']:
                            # Case 20
                            needs_review = True

                elif fuzz.ratio(preprocess(fp['name']), preprocess(cp['name'])) >= 90:
                    if fp['sex'] == cp['sex']:
                        if  age_difference(fp['date_of_birth'], cp['date_of_birth']) == 0:
                            # Case 12
                            # potential_match = True
                            needs_review = True
                        elif age_difference(fp['date_of_birth'], cp['date_of_birth']) > 0:
                            # Case 13
                            # Case 15
                            # Case 22
                            needs_review = True
                    else:
                        if age_difference(fp['date_of_birth'], cp['date_of_birth']) < 12:
                            # Case 14
                            needs_review = True
            if potential_match:
                matching_pairs.append((fp, cp))
                counts += 1
                matches.write('{},{},{},{},{},{},{},{},{},{}\n'.format(
                    fp['_id'], fp['external_id'], preprocess(fp['name']), fp['date_of_birth'], fp['sex'],
                    cp['_id'], cp['external_id'], preprocess(cp['name']), cp['date_of_birth'], cp['sex'],
                ))
            if needs_review:
                reviews.write('{},{},{},{},{},{},{},{},{},{},{}\n'.format(
                    fp['_id'], fp['external_id'], preprocess(fp['name']), fp['date_of_birth'], fp['sex'],
                    cp['_id'], cp['external_id'], preprocess(cp['name']), cp['date_of_birth'], cp['sex'], ''
                ))

        if (idx + 1) % 100 == 0:
            print('id : {},{}'.format(fp['_id'], cp['_id']))
            print('Processed {} records so far with {} profiles potentially matching'.format(idx + 1, counts))

print('Matching done. Time elaspsed: {}'.format(datetime.now() - start))
print('Potential Matches: {}'.format(counts))

print('Starting profile merging')


to_update = []
for index,(fp,cp) in enumerate(matching_pairs):
    to_update.extend(merge(couch,fp['_id'], cp['_id']))

print('{} documents to be updated'.format(len(to_update)))

if not dry_run:
    with io.open('./logs/matching-results-automatic.log', **OPEN_KWARGS) as log:
        print('Processing updates')
        for chunk in chunker_list(to_update, 50):
            for result in couch.update(chunk):
                log.write('{}\n'.format(result))
                time.sleep(10)
