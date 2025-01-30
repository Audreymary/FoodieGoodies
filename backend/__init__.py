from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()
CORS = CORS

def create_app(config_filename='app/config.py'):
    app = Flask(__name__)
    app.config.from_object(config_filename)
    
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    from . import routes  # Import routes after initializing app
    app.register_blueprint(routes.bp)
    
    return app
