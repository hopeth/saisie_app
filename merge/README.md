##Script to help merging of data/contacts submitted at facility level to community
        
#Requirements
- Python 3
- Packages: couchdb, dotenv, fuzzywuzzy and unidecode

# Authenication
Create a `.env` file in the project root with the following contents
```
COUCH_HOST=instance_url
COUCH_USER=admin_user
COUCH_PASS=admin_pass
COUCH_DB=medic
PG_HOST=localhost
PG_PORT=5432
PG_USER=pg_user
PG_PASS=pg_pass
PG_DB=pg_db
```

NB: For Medic 2.X project, you can only access couchdb via localhost through SSH tunneling. On 3.X, use `instance-url/_utils`

# Usage
1. Run `python matching.py` to generate a file of potential matches that will be shared with IH
1. IH will review the file and add a column 'IH Comments' that says if a merge should happen or not
Run `pythob mergin.py -f <xls file shared by IH>` to process the matches.