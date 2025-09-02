from flask import Flask
from flask_cors import CORS
from config import Config
from database import db
from api.routes import api_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    db.init_app(app)

    app.register_blueprint(api_bp, url_prefix="/api")

    @app.route("/")
    def root():
        return {"message": "Focus & Winning"}, 200

    return app

if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=5000, debug=True)
