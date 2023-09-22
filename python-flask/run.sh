#!/bin/bash

virtualenv python-flask
. python-flask/bin/activate
pip install Flask

flask --app server run