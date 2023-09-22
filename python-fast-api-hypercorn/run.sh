#!/bin/bash
pip install fastapi
pip install "hypercorn"

hypercorn main:app --reload