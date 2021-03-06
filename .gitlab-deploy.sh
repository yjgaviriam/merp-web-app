#!/bin/bash
#Get servers list
set -f
echo "Deploy project on server $DEPLOY_SERVER"
USER_GIT=$USER_GIT
USER_GIT_PASSWORD=$USER_GIT_PASSWORD
ssh -o StrictHostKeyChecking=no -T "$USER_SERVER@$DEPLOY_SERVER" "cd /home/ubuntu/merp-web-app/ &&
git pull https://${USER_GIT}:${USER_GIT_PASSWORD}@gitlab.com/yjgaviriam/merp-web-app.git && 
PATH=$PATH:/usr/bin/sonar-scanner-3.3.0.1492-linux/bin && sonar-scanner && npm install && 
ng build --prod && sudo cp -a ./dist/merp-web-app/. /var/www/html/"