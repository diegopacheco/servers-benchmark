#!/bin/bash

sudo apt-get update -y
sudo apt-get install nginx -y
sudo apt-get install php8.1-fpm -y
sudo systemctl status php8.1-fpm

sudo sh -c 'cat ./default > /etc/nginx/sites-available/default'
sudo nginx -t
sudo systemctl restart nginx
sudo chmod -R 777 /var/www/html
echo "<?php phpinfo(); ?>" >> /var/www/html/info.php

curl -i http://localhost/info.php