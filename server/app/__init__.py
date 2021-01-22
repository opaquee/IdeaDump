from flask import Flask
from flask_sqlalchemy import SQLAlchemy


# Make SQLAlchemy globally accessible
db = SQLAlchemy()


def create_app():
    # TODO: Figure out idea configuration setup
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object("config.DevConfig")

    # Intialize database
    db.init_app(app)

    with app.app_context():
        # Import application blueprints
        from . import ideas
        from . import topics

        # Register blueprints
        app.register_blueprint(ideas.bp)
        app.register_blueprint(topics.bp)

        return app
