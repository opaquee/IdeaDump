#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response, url_for
from flask_httpauth import HTTPBasicAuth
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import json
import os
import platform

app = Flask(__name__)
cors = CORS(app)

db_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'sqlite.db')
if platform.system() == 'Windows':
    db_URI = 'sqlite:///' + db_dir
else:
    db_URI = 'sqlite:////' + db_dir
app.config['SQLALCHEMY_DATABASE_URI'] = db_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import Topic

class Idea:
    def __init__(self, id, topic, title, description, visible, author):
        self.id = id
        self.topic = topic
        self.title = title
        self.description = description
        self.visible = visible
        self.author = author

    def serial(self):
        return {
            "id": self.id,
            "topic": self.topic,
            "title": self.title,
            "description": self.description,
            "visible": self.visible,
            "author": self.author,
        }


ideas = {}


@app.route("/ideas/<topic>", methods=["GET"])
def get_ideas(topic):
    return jsonify(ideas=[idea.serial() for idea in ideas[topic]])


@app.route("/topics", methods=["GET"])
def get_topics():
    return jsonify(topics=[topic for topic in ideas])


@app.route("/ideas/<topic>", methods=["POST"])
def post_idea(topic):
    id = request.args.get("id")
    title = request.args.get("title")
    description = request.args.get("description")
    visible = request.args.get("visible")
    author = request.args.get("author")
    idea = Idea(id, topic, title, description, visible, author)

    print("###########################################")
    print(idea.id, idea.topic, idea.title, idea.description, idea.visible, idea.author)
    print("###########################################")

    if topic in ideas:
        ideas[topic].append(idea)
    else:
        ideas[topic] = [idea]

    return json.dumps(idea.__dict__)


@app.route("/idea/<ideaId>", methods=["GET"])
def get_idea(ideaId):
    for idea in ideas:
        if idea.id == ideaId:
            return jsonify(idea.serial())
    return None
