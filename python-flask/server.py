from flask import Flask
import uuid

app = Flask(__name__)

@app.route("/")
def get_index_route():
    myuuid = uuid.uuid4()
    return "<p>" + str(myuuid) + "</p>"
