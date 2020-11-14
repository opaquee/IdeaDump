#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response, url_for
from flask_httpauth import HTTPBasicAuth
import json

app = Flask(__name__)


class Idea:
    def __init__(self, topic, title, description, visible, author):
        self.topic = topic
        self.title = title
        self.description = description
        self.visible = visible
        self.author = author

    def serial(self):
        return {
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
    title = request.args.get("title")
    description = request.args.get("description")
    visible = request.args.get("visible")
    author = request.args.get("author")
    idea = Idea(topic, title, description, visible, author)

    print("###########################################")
    print(idea.topic, idea.title, idea.description, idea.visible, idea.author)
    print("###########################################")

    if topic in ideas:
        ideas[topic].append(idea)
    else:
        ideas[topic] = [idea]

    return json.dumps(idea.__dict__)


if __name__ == "__main__":
    app.run(debug=True)
