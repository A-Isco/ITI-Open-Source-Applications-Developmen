#!/bin/bash
USR="abdelrahman"
PASSWORD=$(cat passfile.txt)
DBNAME="invoice_db "  
T1="inv_master"
T2="inv_detail"


## exit code 
#                  0:success
#                  1:invoice not exist
#                  2:invoice already exists
# add sourc files
source menu.sh
source checker.sh
source db.sh
displayMenu

exit 0 