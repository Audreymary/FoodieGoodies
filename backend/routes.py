from app import app
from flask import jsonify, request
from models import db, User, FoodItem, Order, OrderItem

# Route to get all food items
@app.route('/food_items', methods=['GET'])
def get_food_items():
    food_items = FoodItem.query.all()
    return jsonify([{
        'id': item.id,
        'name': item.name,
        'description': item.description,
        'price': item.price,
        'image_url': item.image_url,
        'category': item.category,
        'ingredients': item.ingredients.split(",")
    } for item in food_items])

# Route to create a new order
@app.route('/orders', methods=['POST'])
def create_order():
    data = request.get_json()
    
    user_id = data.get('userId')
    food_item_id = data.get('foodItemId')
    quantity = data.get('quantity')
    
    food_item = FoodItem.query.get(food_item_id)
    total_price = food_item.price * quantity
    
    new_order = Order(user_id=user_id, total_price=total_price)
    db.session.add(new_order)
    db.session.commit()

    order_item = OrderItem(order_id=new_order.id, food_item_id=food_item.id, quantity=quantity, price=food_item.price)
    db.session.add(order_item)
    db.session.commit()

    return jsonify({'message': 'Order created successfully', 'orderId': new_order.id}), 201


