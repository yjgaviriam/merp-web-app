#!/bin/bash

# any future command that fails will exit the script
set -e
# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
ls

# ** Alternative approach
# echo -e "$SSH_PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
bash ./deploy/disable-host-key-checking.sh

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVER=$DEPLOY_SERVER

echo "deploying to ${server}"
ssh ubuntu@${DEPLOY_SERVER} 'bash -s' < ./deploy/restart-server-production.sh
