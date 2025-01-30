from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from app.models import User, FoodItem, Order, OrderItem

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///foodie_goodies.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)  # Enable CORS for React frontend
migrate = Migrate(app, db)

# Model for food items (to map the JSON data)
class FoodItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255))
    category = db.Column(db.String(50))
    ingredients = db.Column(db.String(255))  # Can store as a string or JSON

# Route to get all food items
@app.route('/api/food_items', methods=['GET'])
def get_food_items():
    food_items = FoodItem.query.all()
    return jsonify([{
        'id': item.id,
        'name': item.name,
        'description': item.description,
        'price': item.price,
        'image_url': item.image_url,
        'category': item.category,
        'ingredients': item.ingredients.split(",")  # Split if stored as comma-separated string
    } for item in food_items])

if __name__ == '__main__':
    app.run(debug=True)