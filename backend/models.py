from datetime import datetime
from database import db

class Category(db.Model):
    __tablename__ = "categories"
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(64), unique=True, nullable=False) 
    name = db.Column(db.String(128), nullable=False)

    subcategories = db.relationship("Subcategory", backref="category", cascade="all, delete-orphan")

class Subcategory(db.Model):
    __tablename__ = "subcategories"
    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id", ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(128), nullable=False, index=True) 

    questions = db.relationship("Question", backref="subcategory", cascade="all, delete-orphan")

class Question(db.Model):
    __tablename__ = "questions"
    id = db.Column(db.Integer, primary_key=True)
    subcategory_id = db.Column(db.Integer, db.ForeignKey("subcategories.id", ondelete="CASCADE"), nullable=False)
    text = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    choices = db.relationship("Choice", backref="question", cascade="all, delete-orphan")

class Choice(db.Model):
    __tablename__ = "choices"
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey("questions.id", ondelete="CASCADE"), nullable=False)
    text = db.Column(db.String(512), nullable=False)
    is_correct = db.Column(db.Boolean, default=False, nullable=False)
