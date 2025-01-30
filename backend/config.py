# import os

# class Config:
#     SQLALCHEMY_DATABASE_URI = 'sqlite:///foodie_goodies.db'  # SQLite database for development
#     SQLALCHEMY_TRACK_MODIFICATIONS = False  # Disable unnecessary feature
#     SECRET_KEY = os.urandom(24)  # For session management

class Config:
    SECRET_KEY = 'your-secret-key'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///foodie_goodies.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
