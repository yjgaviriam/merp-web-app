#!/bin/bash

# any future command that fails will exit the script
set -e
# Lets write the public key of our aws instance
eval $(ssh-agent -s)
echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
# echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
# sudo ./deploy/disable-host-key-checking.sh


echo "deploying to $DEPLOY_SERVER"
ssh ubuntu@172.31.19.225 'bash -s' < ./deploy/restart-server-production.sh