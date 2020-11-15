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

# TODO: Write a serialize function for each model so that they can
# be represented as a JSON object with very little work
@app.route("/ideas/<topic>", methods=["GET"])
def get_ideas(topic):
    if topic == "all":
        all_ideas_by_topic = Idea.query.all()
    else:
        all_ideas_by_topic = Idea.query.filter_by(topic_name=topic).all()

    serialized_ideas = [{
        "id": idea.id,
        "title": idea.title,
        "description": idea.description,
        "visible": idea.visible,
        "author": idea.author,
        "topic": idea.topic_name
    } for idea in all_ideas_by_topic]
    return jsonify(serialized_ideas)


@app.route("/topics", methods=["GET"])
def get_topics():
    all_topics = Topic.query.all()
    all_topics_list = [topic.name for topic in all_topics]
    return jsonify(all_topics_list)


@app.route("/ideas/<topic>", methods=["POST"])
def post_idea(topic):
    title = request.args.get("title")
    description = request.args.get("description")
    visible = request.args.get("visible")
    author = request.args.get("author")

    tp = Topic.query.filter_by(name=topic).first()
    if tp is None:
        tp = Topic(name=topic)

    idea = Idea(title=title, description=description, visible=True, author=author, topic=tp)

    print("###########################################")
    print(topic, title, description, visible, author)
    print("###########################################")

    db.session.add(tp)
    db.session.commit()

    return jsonify(
        id=idea.id,
        title=idea.title,
        description=idea.description,
        visible=idea.visible,
        author=idea.author,
        topic=idea.topic_name   
    )


@app.route("/idea/<ideaId>", methods=["GET"])
def get_idea(ideaId):
    idea = Idea.query.filter_by(id=ideaId).first()
    return jsonify(
        id=idea.id,
        title=idea.title,
        description=idea.description,
        visible=idea.visible,
        author=idea.author,
        topic=idea.topic_name   
    )
