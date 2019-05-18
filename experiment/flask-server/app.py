from flask import Flask 
from flask import request
import json
app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return 'hello'

@app.route('/add', methods=['GET'])
def add():
    lst = json.loads(request.args.get('args'))
    return str(lst[0] + lst[1])