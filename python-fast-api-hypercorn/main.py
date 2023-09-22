from typing import Union

from fastapi import FastAPI
import uuid

app = FastAPI()


@app.get("/")
def readUUID():
    myuuid = uuid.uuid4()
    content = str(myuuid)
    return content.encode("ascii")