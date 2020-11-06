import argparse
import time
import json
import io
import os
from datetime import datetime

import pandas as pd
import couchdb
import dotenv

from utils import merge, chunker_list, OPEN_KWARGS



start = datetime.now()

dotenv.load_dotenv('.env')

dry_run = False

if not os.path.exists('./logs'):
    os.mkdir('./logs')

server = couchdb.Server('https://{}:{}@{}'.format(
    os.getenv('COUCH_USER'),
    os.getenv('COUCH_PASS'),
    os.getenv('COUCH_HOST')))

couch = server[os.getenv('COUCH_DB')]

parser = argparse.ArgumentParser()
parser.add_argument("--file", "-f", type=str, required=True)
args = parser.parse_args()

# process community profile merges
df = pd.read_excel(args.file, sheet_name='community')

print('Reading {}'.format(args.file))

# we'll be logging two separate operations
OPEN_KWARGS['mode'] = 'a'

to_update = []
print('Processing profile replacements')
for index, row in df.iterrows():
    if row['IH COMMENTS'].lower() == 'merge':
        to_update.extend(merge(couch, row['SECONDARY'], row['PRIMARY']))
        print('{} of {} rows processed'.format(index+1, len(df)))

if not dry_run:
    with io.open('./logs/matching-results-{}.log'.format(time.strftime("%Y-%m-%d-%H")), **OPEN_KWARGS) as log:
        print('Processing updates to couch')
        for chunk in chunker_list(to_update, 1):
            for result in couch.update(chunk):
                try:
                    log.write('{}\n'.format(json.dumps(result)))
                except:
                    print(result)
            time.sleep(5)

to_update = []
print('Processing profile movement: facility-community')
df = pd.read_excel(args.file, sheet_name='facility-community')
for index, row in df.iterrows():
    if row['IH COMMENTS'].lower() == 'merge':
        to_update.extend(merge(couch, row['ID'], row['ID_MATCH']))
        print('{} of {} rows processed'.format(index+1, len(df)))

print('{} documents to be updated'.format(len(to_update)))

if not dry_run:
    with io.open('./logs/matching-results-{}.log'.format(time.strftime("%Y-%m-%d-%H")), **OPEN_KWARGS) as log:
        print('Processing updates to couch')
        for chunk in chunker_list(to_update, 1):
            for result in couch.update(chunk):
                try:
                    log.write('{}\n'.format(json.dumps(result)))
                except:
                    print(result)
            time.sleep(5)
