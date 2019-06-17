#!/bin/bash

# any future command that fails will exit the script
set -e

# SSH_PRIVATE_KEY=$SSH_PRIVATE_KEY
# touch ./ubuntu_key.pem
# echo -e "${SSH_PRIVATE_KEY}" >> ./ubuntu_key.pem
# chmod 400 ./ubuntu_key.pem

DEPLOY_SERVER=$DEPLOY_SERVER

echo "a ----------------------------------------------"

echo "deploying to ${DEPLOY_SERVER}"
ssh ubuntu@${DEPLOY_SERVER} 'bash -s' < ./deploy/restart-server-production.sh
