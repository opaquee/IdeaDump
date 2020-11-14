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

from models import Idea, Topic
# from models import Post, Category

"""
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
"""

@app.route("/ideas/<topic>", methods=["GET"])
def get_ideas(topic):
    all_ideas_by_topic = Ideas.query.filter_by(topic_name=topic).all()
    print(all_ideas_by_topic)
    return None


@app.route("/topics", methods=["GET"])
def get_topics():
    all_topics = Topic.query.all()
    print(all_topics)
    return None


@app.route("/ideas/<topic>", methods=["POST"])
def post_idea(topic):
    id = request.args.get("id")
    title = request.args.get("title")
    description = request.args.get("description")
    visible = request.args.get("visible")
    author = request.args.get("author")
    #idea = Idea(id, topic, title, description, visible, author)
    tp = Topic(name=topic)
    idea = Idea(title=title, description=description, visible=True, author=author, topic=tp)

    print("###########################################")
    print(id, topic, title, description, visible, author)
    print("###########################################")

    db.session.add(tp)
    db.session.commit()

    return idea.id


@app.route("/idea/<ideaId>", methods=["GET"])
def get_idea(ideaId):
    idea = Idea.query.filter_by(id=ideaId).first()
    print(idea)
    return None
