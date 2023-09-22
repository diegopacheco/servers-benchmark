from fastapi import FastAPI
import uuid

app = FastAPI()

@app.get("/")
def readUUID():
    return str(uuid.uuid4())