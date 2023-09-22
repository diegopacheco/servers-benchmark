#!/bin/bash

virtualenv python-fast-api
. python-fast-api/bin/activate
pip install fastapi
pip install "uvicorn[standard]"

uvicorn main:app --reload