import random
from flask import Blueprint, request, jsonify
from database import db
from models import Category, Subcategory, Question, Choice

api_bp = Blueprint("api", __name__)

CATEGORY_MAP = {
    "general": ["General Knowledge", "Geography", "History", "Science", "Mathematics"],
    "entertainment": ["Movies", "TV Shows", "Music", "Video Games", "Art & Literature", "Celebrities & Pop Culture"],
    "sports": ["Football", "Health & Fitness", "Travel & Places", "Fashion & Lifestyle"],
    "fun": ["Animals & Wildlife", "Environment & Sustainability", "Holidays & Festivals", "Business & Economy", "Medicine & Health", "Social Media Trends", "Mythology & Legends", "Random Fun Facts"],
    "creativity": ["Riddles & Puzzles", "Technology & Innovation", "Mental Health & Wellness", "Adventure & Exploration", "Space & Astronomy"],
}

@api_bp.get("/health")
def health():
    return {"status": "ok"}, 200

@api_bp.get("/categories")
def get_categories():
    cats = Category.query.all()
    return jsonify([{"id": c.id, "key": c.key, "name": c.name} for c in cats])

@api_bp.get("/subcategories")
def get_subcategories():
    key = request.args.get("category")
    query = Subcategory.query
    if key:
        cat = Category.query.filter_by(key=key).first()
        if not cat:
            return jsonify({"error": "category not found"}), 404
        query = query.filter_by(category_id=cat.id)
    subs = query.order_by(Subcategory.name.asc()).all()
    return jsonify([{"id": s.id, "name": s.name, "category_id": s.category_id} for s in subs])

def serialize_question(q):
    choices = list(q.choices)
    random.shuffle(choices)
    return {
        "id": q.id,
        "text": q.text,
        "choices": [{"id": ch.id, "text": ch.text} for ch in choices]
    }

@api_bp.get("/questions")
def get_questions_by_subcategory():
    name = request.args.get("subcategory")
    limit = int(request.args.get("limit", 30))
    shuffle = request.args.get("shuffle", "true").lower() == "true"

    if not name:
        return jsonify({"error": "subcategory query param required"}), 400

    sub = Subcategory.query.filter_by(name=name).first()
    if not sub:
        return jsonify({"error": "subcategory not found"}), 404

    qset = Question.query.filter_by(subcategory_id=sub.id).all()
    if shuffle:
        random.shuffle(qset)
    qset = qset[:limit]

    return jsonify([serialize_question(q) for q in qset])

@api_bp.get("/random")
def get_random_mixed():
    per_sub = int(request.args.get("per_subcategory", 5))
    results = []
    subs = Subcategory.query.all()
    for s in subs:
        qset = Question.query.filter_by(subcategory_id=s.id).all()
        random.shuffle(qset)
        for q in qset[:per_sub]:
            results.append(serialize_question(q))
    random.shuffle(results)
    return jsonify(results)

@api_bp.post("/validate")
def validate():
    data = request.get_json(silent=True) or {}
    qid = data.get("question_id")
    cid = data.get("choice_id")
    if not (qid and cid):
        return jsonify({"error": "question_id and choice_id required"}), 400

    choice = Choice.query.filter_by(id=cid, question_id=qid).first()
    if not choice:
        return jsonify({"correct": False, "message": "choice not found for question"}), 404

    return jsonify({"correct": bool(choice.is_correct)})
