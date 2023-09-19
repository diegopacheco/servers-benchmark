#!/bin/bash

virtualenv try-twisted
. try-twisted/bin/activate
pip install twisted

python3 server.py