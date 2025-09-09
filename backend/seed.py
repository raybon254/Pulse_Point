import importlib
import pkgutil
from flask import Flask
from config import Config
from database import db
from models import Category, Subcategory, Question, Choice

CATEGORY_MAP = {
    "general": ["General Knowledge", "Geography", "History", "Science", "Mathematics"],
    "entertainment": ["Movies", "TV Shows", "Music", "Video Games", "Art & Literature", "Celebrities & Pop Culture"],
    "sports": ["Football", "Health & Fitness", "Travel & Places", "Fashion & Lifestyle"],
    "fun": ["Animals & Wildlife", "Environment & Sustainability", "Holidays & Festivals", "Business & Economy", "Medicine & Health", "Social Media Trends", "Mythology & Legends", "Random Fun Facts"],
    "creativity": ["Riddles & Puzzles", "Technology & Innovation", "Mental Health & Wellness", "Adventure & Exploration", "Space & Astronomy"],
}

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    return app

def upsert_categories(app):
    with app.app_context():
        db.create_all()
        for key, subnames in CATEGORY_MAP.items():
            cat = Category.query.filter_by(key=key).first()
            if not cat:
                cat = Category(key=key, name=key.title())
                db.session.add(cat)
                db.session.commit()
            for sname in subnames:
                sub = Subcategory.query.filter_by(category_id=cat.id, name=sname).first()
                if not sub:
                    sub = Subcategory(category_id=cat.id, name=sname)
                    db.session.add(sub)
                    db.session.commit()

def seed_from_modules(app):
    """Import each data.<category>.<Subcategory>.py module and insert 30 questions.
    Each module must expose a function `build_questions()` returning a list of dicts:
      { 'question': str, 'choices': [str,str,str,str], 'answer_index': int }
    If fewer than 30 are returned, synthetic questions are generated to reach 30.
    """
    with app.app_context():
        for key in CATEGORY_MAP.keys():
            pkg_name = f"data.{key}"
            package = pkgutil.importlib.import_module(pkg_name)
            for _, modname, ispkg in pkgutil.iter_modules(package.__path__):
                if ispkg:
                    continue
                module = importlib.import_module(f"{pkg_name}.{modname}")
                # Derive subcategory name from module (replace underscores with spaces, title-cased) unless module sets SUBCATEGORY_NAME
                sub_name = getattr(module, "SUBCATEGORY_NAME", modname.replace("_", " ").title())
                sub = Subcategory.query.filter_by(name=sub_name).first()
                if not sub:
                    print(f"WARNING: subcategory '{sub_name}' missing in DB; skipping module {module.__name__}")
                    continue

                builder = getattr(module, "build_questions", None)
                if not callable(builder):
                    print(f"WARNING: {module.__name__} missing build_questions(); skipping")
                    continue

                data = builder() or []
                # ensure exactly 30
                while len(data) < 30:
                    i = len(data) + 1
                    # synthetic question
                    data.append({
                        "question": f"{sub_name}: Placeholder question {i}?",
                        "choices": [f"Option {i}A", f"Option {i}B", f"Option {i}C", f"Option {i}D"],
                        "answer_index": 0
                    })
                data = data[:30]

                # clear existing questions for idempotent seeding
                Question.query.filter_by(subcategory_id=sub.id).delete()
                db.session.commit()

                for item in data:
                    q = Question(subcategory_id=sub.id, text=item["question"])
                    db.session.add(q)
                    db.session.flush()  # get q.id
                    for idx, text in enumerate(item["choices"]):
                        ch = Choice(question_id=q.id, text=text, is_correct=(idx == item["answer_index"]))
                        db.session.add(ch)
                db.session.commit()
                print(f"Seeded {sub_name}: {len(data)} questions")

if __name__ == "__main__":
    app = create_app()
    upsert_categories(app)
    # Create stub modules for any missing subcategory files (safety)
    from pathlib import Path
    for key, subs in CATEGORY_MAP.items():
        folder = Path("data") / key
        folder.mkdir(parents=True, exist_ok=True)
        for s in subs:
            mod = s.replace(" & ", " and ").replace(" ", "_")
            path = folder / f"{mod}.py"
            if not path.exists():
                path.write_text(f"""# Auto-generated stub for '{s}'
SUBCATEGORY_NAME = "{s}"
def build_questions():
    # Provide up to 30 real questions. We will auto-fill placeholders to reach 30.
    qs = [
        {{
            "question": "{s}: Example question 1?",
            "choices": ["A", "B", "C", "D"],
            "answer_index": 0
        }},
        {{
            "question": "{s}: Example question 2?",
            "choices": ["A", "B", "C", "D"],
            "answer_index": 1
        }},
    ]
    return qs
""")
    # Now seed from modules
    seed_from_modules(app)
    print("Seeding complete.")
