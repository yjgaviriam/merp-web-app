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

# Se ingresa al servidor
echo "deploying to $SERVER"
ssh ubuntu@ec2-3-13-185-75.us-east-2.compute.amazonaws.com "ls"
# ssh -i $PRIVATE_KEY ubuntu@ec2-3-13-185-75.us-east-2.compute.amazonaws.com
