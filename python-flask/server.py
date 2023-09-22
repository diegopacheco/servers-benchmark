from flask import Flask, request
import uuid

app = Flask(__name__)

@app.route("/")
def get_UUID():
    myuuid = uuid.uuid4()
    content = str(myuuid)
    return content.encode("ascii")
