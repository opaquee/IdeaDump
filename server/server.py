#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response, url_for, send_file, send_from_directory, safe_join, abort
from flask_httpauth import HTTPBasicAuth
import json
import os

app = Flask(__name__)

class Idea:
    def __init__(self, topic, title, description, visible, author, imageName):
        self.topic = topic
        self.title = title
        self.description = description
        self.visible = visible
        self.author = author
        self.imageName = imageName

    def serial(self):
        return {
            "topic": self.topic,
            "title": self.title,
            "description": self.description,
            "visible": self.visible,
            "author": self.author,
            "imageName": self.imageName
        }


ideas = {

    "Projects": [
        Idea("Projects", "Multiplayer JavaScript Snake", "Javascript snake with multiplayer", True, "Tommy", "boog.png"),
        Idea("Projects", "Pac-Man: Battle Royale Edition", , "Pac-man with fortnite style building", True, "Josh", "boog.png")
    ]

    "Pickles": [
        Idea("Pickles", "Pickle Sandwich", "A sandwich made of only pickles", True, "Henri", "boog.png"),
        Idea("Pickles", "BBQ pickles", "Barbequed pickles", True, "Michael", "boog.png")
    ]

    "Games": [
        Idea("Games", "Wizard game", "A wizard game with an in depth upgrade system", True, "Gary", "boog.png")
    ]
}

@app.route("/image/", methods=["GET"])
def get_image():
    try:
        name = request.args.get("name")
        return send_file("img/" + name)
    except FileNotFoundError:
        abort(404)

@app.route("/image/", methods=["POST"])
def post_image():
    if request.files:
        image = request.files["image"]
        image.save(os.path.join("img/", image))

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
    imageName = request.args.get("imageName")
    idea = Idea(topic, title, description, visible, author, imageName)

    if topic in ideas:
        ideas[topic].append(idea)
    else:
        ideas[topic] = [idea]

    return json.dumps(idea.__dict__)


if __name__ == "__main__":
    app.run(debug=True)
