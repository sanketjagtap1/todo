from flask import Flask, redirect, render_template, request, url_for
from pymongo.server_api import ServerApi
from flask_pymongo import pymongo

app = Flask(__name__)

# database
client = pymongo.MongoClient("mongodb+srv://Sanket_jagtap1:sanketjagtap123@cluster0.iz0bg.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'))
db = client['krushiseva']

@app.route('/')
def index():
    equ = "hello"
    return render_template('index.html', equ=equ)


if __name__ == '__main__':
    app.run(debug=True)