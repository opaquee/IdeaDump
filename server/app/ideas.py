from flask import Blueprint, jsonify, request

from .models import Idea, Topic
from app import db

bp = Blueprint("idea", __name__)

# TODO: Write a serialize function for each model so that they can
# be represented as a JSON object with very little work


# Gets all the ideas for a particular topic
@bp.route("/ideas/<topic>", methods=["GET"])
def get_ideas(topic):
    if topic == "all":
        print("DEBUG: Geting all ideas")
        all_ideas_by_topic = Idea.query.all()
    else:
        all_ideas_by_topic = Idea.query.filter_by(topic_name=topic).all()

    serialized_ideas = [
        {
            "id": idea.id,
            "title": idea.title,
            "description": idea.description,
            "visible": idea.visible,
            "author": idea.author,
            "topic": idea.topic_name,
        }
        for idea in all_ideas_by_topic
    ]
    return jsonify(serialized_ideas)


# Post a new idea for a given topic
@bp.route("/ideas/<topic>", methods=["POST"])
def post_idea(topic):
    title = request.args.get("title")
    description = request.args.get("description")
    visible = request.args.get("visible")
    author = request.args.get("author")

    tp = Topic.query.filter_by(name=topic).first()
    if tp is None:
        tp = Topic(name=topic)

    idea = Idea(
        title=title, description=description, visible=True, author=author, topic=tp
    )

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
        topic=idea.topic_name,
    )


# Get specific details about a particular idea
@bp.route("/idea/<ideaId>", methods=["GET"])
def get_idea(ideaId):
    idea = Idea.query.filter_by(id=ideaId).first()
    return jsonify(
        id=idea.id,
        title=idea.title,
        description=idea.description,
        visible=idea.visible,
        author=idea.author,
        topic=idea.topic_name,
    )
