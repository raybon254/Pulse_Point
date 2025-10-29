# Flask Quiz API

A Flask backend that serves random multiple-choice questions organized by categories and subcategories.
Each subcategory has its own Python module that has questions (with 4 choices each).
The database is SQLite and seeded from the `data/` Python modules.

## Quickstart

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Initialize, migrate (create tables), and seed with 30 Qs per subcategory
python seed.py

# Run API
python app.py
```

## Key Endpoints

- `GET /api/health` – service health check
- `GET /api/categories` – list categories
- `GET /api/subcategories?category=<category_key>` – list subcategories for a category key
- `GET /api/questions?subcategory=<name>&limit=30&shuffle=true` – random questions from one subcategory
- `GET /api/random?per_subcategory=5` – random questions across all subcategories
- `POST /api/validate` – validate an answer (`{question_id, choice_id}`)

## Project Layout

```
quiz_api/
├── api/
│   ├── __init__.py
│   └── routes.py
├── data/
│   ├── creativity/
│   ├── entertainment/
│   ├── fun/
│   ├── general/
│   └── sports/
├── app.py
├── config.py
├── database.py
├── models.py
├── seed.py
├── requirements.txt
└── README.md
```
