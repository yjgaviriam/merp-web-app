#!/bin/bash

# any future command that fails will exit the script
set -e

# go to folder of repository
cd /home/ubuntu/merp-web-app/

# pulling the repo again
git pull origin master https://$USER:$USER_PASSWORD@gitlab.com/yjgaviriam/merp-web-app.git

# installing npm packages
echo "Running npm install"
npm install

# building application
echo "Build application"
ng build --prod

# copy the application to folder www
echo "Deploy application"
sudo cp -a ./dist/merp-web-app/. /var/www/html/
