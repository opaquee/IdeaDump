from flask import Blueprint, jsonify
from .models import Topic

bp = Blueprint("topics", __name__)


# Grabs all available topics
@bp.route("/topics", methods=["GET"])
def get_topics():
    all_topics = Topic.query.all()
    all_topics_list = [topic.name for topic in all_topics]
    if not all_topics_list:
        return "No topics"
    return jsonify(all_topics_list)
