#!/bin/bash

# any future command that fails will exit the script
set -e

# go to folder of repository
cd /home/ubuntu/merp-web-app/

# pull the repo again
git pull https://$USER:$USER_PASSWORD@gitlab.com/yjgaviriam/merp-web-app.git

# install npm packages
echo "Running npm install"
npm install

# build application
echo "Build application"
ng build --prod

# copy the application to folder www
echo "Deploy application"
sudo cp -a ./dist/merp-web-app/. /var/www/html/
