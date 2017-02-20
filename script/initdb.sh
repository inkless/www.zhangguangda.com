#/bin/bash
mkdir -p db
touch db/ip.db
sqlite3 db/ip.db < script/ip.sql
