#!/bin/bash
#Get servers list
set -f
echo "Deploy project on server $DEPLOY_SERVER"
ssh ubuntu@$DEPLOY_SERVER "cd /var/www && git pull origin master"