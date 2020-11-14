#!flask/bin/python
from flask import Flask, jsonify, abort, request, make_response, url_for
from flask_httpauth import HTTPBasicAuth

app = Flask(__name__)

topics = [
  "Feed",
  "Pickles",
  "Apps",
  "Sports",
  "Tech",
  "Music",
  "Borgor Maker",
  "Kanye West",
  "Cult",
]

ideas = {}

@app.route('/ideas/<topic>', methods = ['GET'])
def get_ideas(topic):
    return jsonify({
        'topic': topic,
        'ideas': {
            'game idea 1': 'desc',
            'game idea 2': 'desc'
        }
    })

@app.route('/ideas/<topic>', methods = ['POST'])
def post_idea(topic):
    title = request.args.get('title')
    description = request.args.get('description')

    print(title, description)

    return jsonify(
        topic=topic,
        title=title,
        description=description
    )

if __name__ == '__main__':
    app.run(debug=True)
    for topic in topics:
        ideas[topic] = {}