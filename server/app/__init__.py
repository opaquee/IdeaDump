from flask import Flask
from flask_sqlalchemy import SQLAlchemy


# Make SQLAlchemy globally accessible
db = SQLAlchemy()


# TODO: Explicit package versions in requirements.txt
def create_app():
    app = Flask(__name__)
    app.config.from_object("config.DevConfig")

    # Intialize database
    db.init_app(app)

    with app.app_context():
        # Import application blueprints
        from . import ideas
        from . import topics

        app.logger.info("App's getting created!!!!!")
        db.create_all()
        # Register blueprints
        app.register_blueprint(ideas.bp)
        app.register_blueprint(topics.bp)

        return app
