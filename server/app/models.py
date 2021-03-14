from . import db


class Idea(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    visible = db.Column(db.Boolean(True), nullable=False)
    author = db.Column(db.String(255), nullable=False)

    topic_name = db.Column(db.String(255), db.ForeignKey("topic.name"), nullable=False)
    topic = db.relationship("Topic", backref=db.backref("ideas", lazy=True))

    def __repr__(self):
        return "<Idea %r>" % self.title


class Topic(db.Model):
    name = db.Column(db.String(255), primary_key=True)

    def __repr__(self):
        return "<Topic %r>" % self.name
