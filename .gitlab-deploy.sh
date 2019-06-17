#!/bin/bash

#Get servers list
set -f
ssh ubuntu@${DEPLOY_SERVER} "ls /var/www"