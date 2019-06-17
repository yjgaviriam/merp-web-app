#!/bin/bash

# any future command that fails will exit the script
set -e
# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
# echo -e "$SSH_PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
bash ./deploy/disable-host-key-checking.sh

DEPLOY_SERVER=$DEPLOY_SERVER

SSH_PRIVATE_KEY=$SSH_PRIVATE_KEY
touch ./ubuntu_key.pem
ls
echo -e "${SSH_PRIVATE_KEY}" >> ./ubuntu_key.pem

echo "deploying to ${DEPLOY_SERVER}"
ssh -i "ubuntu_key.pem" ubuntu@${DEPLOY_SERVER} 'bash -s' < ./deploy/restart-server-production.sh
