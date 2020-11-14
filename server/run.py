# 
from app import app, db, Idea, Topic
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
print(topics)
print(ideas)

'''
py = Category(name='Python')
Post(title='Hello Python!', category=py)
db.session.add(py)
db.session.commit()
'''

if __name__ == '__main__':
    app.run(debug=True)