#!/bin/bash
pip install fastapi
pip install "uvicorn[standard]"

uvicorn main:app --reload