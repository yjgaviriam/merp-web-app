#!/bin/bash
#Get servers list
set -f
echo "Deploy project on server $DEPLOY_SERVER"
ssh -o StrictHostKeyChecking=no -T "$USER_SERVER@$DEPLOY_SERVER" 'bash -s' < ./deploy-production.sh