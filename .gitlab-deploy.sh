#!/bin/bash
#Get servers list
set -f
echo "Deploy project on server $DEPLOY_SERVER"
ssh -o "StrictHostKeyChecking=no" -p22 ubuntu@$DEPLOY_SERVER "mkdir /var/www/html_tmp"