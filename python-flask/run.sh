#!/bin/bash

pip3 install -r requirements.txt

python3 -m flask --app server run
