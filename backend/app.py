# # from flask import Flask, request, jsonify
# # from flask_sqlalchemy import SQLAlchemy
# # from models import db, FoodItem

# # app = Flask(__name__)
# # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fooditems.db'  # or PostgreSQL URL
# # db.init_app(app)

# # # Create food item
# # @app.route('/api/food', methods=['POST'])
# # def add_food():
# #     data = request.get_json()
# #     new_food = FoodItem(
# #         name=data['name'],
# #         description=data['description'],
# #         price=data['price'],
# #         image_url=data['image_url']
# #     )
# #     db.session.add(new_food)
# #     db.session.commit()
# #     return jsonify({'message': 'Food item added successfully!'}), 201

# # # Edit food item
# # @app.route('/api/food/<int:id>', methods=['PUT'])
# # def edit_food(id):
# #     data = request.get_json()
# #     food = FoodItem.query.get(id)
# #     if not food:
# #         return jsonify({'message': 'Food item not found'}), 404
    
# #     food.name = data['name']
# #     food.description = data['description']
# #     food.price = data['price']
# #     food.image_url = data['image_url']
# #     db.session.commit()

# #     return jsonify({'message': 'Food item updated successfully!'})

# # # Delete food item
# # @app.route('/api/food/<int:id>', methods=['DELETE'])
# # def delete_food(id):
# #     food = FoodItem.query.get(id)
# #     if not food:
# #         return jsonify({'message': 'Food item not found'}), 404
    
# #     db.session.delete(food)
# #     db.session.commit()
    
# #     return jsonify({'message': 'Food item deleted successfully!'})

# # if __name__ == '__main__':
# #     app.run(debug=True)


# from flask import Flask, jsonify, request

# app = Flask(__name__)

# # Sample food items data (you could replace this with a database)
# food_items = [
#     {"id": 1, "name": "Pizza", "price": 10},
#     {"id": 2, "name": "Burger", "price": 5},
#     {"id": 3, "name": "Pasta", "price": 7}
# ]

# # Get all food items
# @app.route('/api/food-items', methods=['GET'])
# def get_food_items():
#     return jsonify(food_items)

# # Add a new food item
# @app.route('/api/food-items', methods=['POST'])
# def add_food_item():
#     new_item = request.get_json()
#     new_item["id"] = len(food_items) + 1  # Automatically generate an ID
#     food_items.append(new_item)
#     return jsonify(new_item), 201

# # Edit an existing food item
# @app.route('/api/food-items/<int:item_id>', methods=['PUT'])
# def update_food_item(item_id):
#     item = next((food for food in food_items if food["id"] == item_id), None)
#     if not item:
#         return jsonify({"message": "Item not found"}), 404
    
#     updated_item = request.get_json()
#     item.update(updated_item)
#     return jsonify(item)

# # Delete a food item
# @app.route('/api/food-items/<int:item_id>', methods=['DELETE'])
# def delete_food_item(item_id):
#     global food_items
#     food_items = [food for food in food_items if food["id"] != item_id]
#     return jsonify({"message": "Item deleted successfully"}), 200

# if __name__ == '__main__':
#     app.run(debug=True)



from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to access the API

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///foodie_goodies.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# FoodItem model
class FoodItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        return {"id": self.id, "name": self.name, "price": self.price, "image_url": self.image_url}

# ✅ Correct way to create tables in Flask 2.3+
with app.app_context():
    db.create_all()

# API Routes
@app.route('/api/food-items', methods=['GET'])
def get_food_items():
    food_items = FoodItem.query.all()
    return jsonify([item.to_dict() for item in food_items]), 200

@app.route('/api/food-items', methods=['POST'])
def add_food_item():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    if "name" not in data or "price" not in data:
        return jsonify({"error": "Missing 'name' or 'price'"}), 400

    new_item = FoodItem(name=data["name"], price=data["price"], image_url=data.get("image_url"))
    db.session.add(new_item)
    db.session.commit()

    return jsonify(new_item.to_dict()), 201

@app.route('/api/food-items/<int:item_id>', methods=['PUT'])
def update_food_item(item_id):
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    item = FoodItem.query.get(item_id)
    if not item:
        return jsonify({"error": "Item not found"}), 404

    data = request.get_json()
    if "name" in data:
        item.name = data["name"]
    if "price" in data:
        item.price = data["price"]
    if "image_url" in data:
        item.image_url = data["image_url"]

    db.session.commit()
    return jsonify(item.to_dict()), 200

@app.route('/api/food-items/<int:item_id>', methods=['DELETE'])
def delete_food_item(item_id):
    item = FoodItem.query.get(item_id)
    if not item:
        return jsonify({"error": "Item not found"}), 404

    db.session.delete(item)
    db.session.commit()
    return jsonify({"message": f"Item with ID {item_id} deleted successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
