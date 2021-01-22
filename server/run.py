#
from app import app, db, Idea, Topic, jsonify
# from app import app, db, Post, Category
"""
tp = Topic(name='Pickle')
#Idea(title='PickleHacks 2', description='Amazing idea', visible=True, author='Pick rick', topic=tp)
Idea(title='Hellow Python!', topic=tp)
db.session.add(tp)
db.session.commit()
"""
topics = Topic.query.all()
ideas = Idea.query.all()
print("Topics")
print(topics)
print("Ideas")
print(ideas)
topic1 = Topic.query.filter_by(name="Pickle").first()
serialized_ideas = [{ "idea": idea.title } for idea in topic1.ideas]
print(serialized_ideas)
'''
py = Category(name='Python')
Post(title='Hello Python!', category=py)
db.session.add(py)
db.session.commit()
'''

if __name__ == '__main__':
    app.run(debug=True)
