# 
from app import app, db, Topic

topics = Topic.query.all()

if __name__ == "__main__":
    app.run(debug=True)