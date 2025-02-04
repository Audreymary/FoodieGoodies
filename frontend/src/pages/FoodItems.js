// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import OrderButton from '../components/OrderButton';
// // // import styles from './styles'; // Import styles from styles.js

// // // function FoodItems() {
// // //   const [foodItems, setFoodItems] = useState([]);
// // //   const [newFoodItem, setNewFoodItem] = useState({
// // //     name: '',
// // //     description: '',
// // //     price: '',
// // //     image_url: '',
// // //   });
// // //   const [orders, setOrders] = useState([]); // State to track orders

// // //   const navigate = useNavigate(); // Hook to navigate between pages

// // //   useEffect(() => {
// // //     fetch('http://127.0.0.1:5000/api/food-items')
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         setFoodItems(data);
// // //       })
// // //       .catch((error) => console.error('Error fetching food items:', error));
// // //   }, []);

// // //   const handleOrder = (foodItemId) => {
// // //     const orderedItem = foodItems.find((food) => food.id === foodItemId);
// // //     if (orderedItem) {
// // //       setOrders([...orders, orderedItem]);
// // //       alert(`Order placed for ${orderedItem.name}`);
// // //     }
// // //   };

// // //   const handleInputChange = (event) => {
// // //     const { name, value } = event.target;
// // //     setNewFoodItem({ ...newFoodItem, [name]: value });
// // //   };

// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     fetch('http://127.0.0.1:5000/api/food-items', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(newFoodItem),
// // //     })
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         setFoodItems([...foodItems, data]); // Add the new food item to the list
// // //         setNewFoodItem({
// // //           name: '',
// // //           description: '',
// // //           price: '',
// // //           image_url: '',
// // //         });

// // //         // After adding, navigate to OrderPage and pass orders
// // //         navigate('/orders', { state: { orders: [...orders, data] } });
// // //       })
// // //       .catch((error) => console.error('Error adding food item:', error));
// // //   };

// // //   const handleGoToOrderPage = () => {
// // //     // Navigate to the order page and pass the orders via state
// // //     navigate('/orders', { state: { orders } });
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2 style={styles.heading}>Food Menu</h2>

// // //       <div style={styles.foodItemsContainer}>
// // //         {foodItems.length > 0 ? (
// // //           foodItems.map((foodItem) => (
// // //             <div key={foodItem.id} style={styles.foodItem}>
// // //               <img src={foodItem.image_url} alt={foodItem.name} style={styles.foodImage} />
// // //               <h3 style={styles.foodName}>{foodItem.name}</h3>
// // //               <p style={styles.foodDescription}>{foodItem.description}</p>
// // //               <p style={styles.foodPrice}><strong>Price:</strong> ${foodItem.price}</p>
// // //               <OrderButton onOrder={() => handleOrder(foodItem.id)} />
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>Loading food items...</p>
// // //         )}
// // //       </div>

// // //       <h3 style={styles.addNewFoodHeading}>Add New Food Item</h3>
// // //       <form onSubmit={handleSubmit} style={styles.form}>
// // //         <input
// // //           type="text"
// // //           name="name"
// // //           value={newFoodItem.name}
// // //           onChange={handleInputChange}
// // //           placeholder="Food Name"
// // //           required
// // //           style={styles.input}
// // //         />
// // //         <input
// // //           type="text"
// // //           name="description"
// // //           value={newFoodItem.description}
// // //           onChange={handleInputChange}
// // //           placeholder="Food Description"
// // //           required
// // //           style={styles.input}
// // //         />
// // //         <input
// // //           type="number"
// // //           name="price"
// // //           value={newFoodItem.price}
// // //           onChange={handleInputChange}
// // //           placeholder="Food Price"
// // //           required
// // //           style={styles.input}
// // //         />
// // //         <input
// // //           type="text"
// // //           name="image_url"
// // //           value={newFoodItem.image_url}
// // //           onChange={handleInputChange}
// // //           placeholder="Image URL"
// // //           required
// // //           style={styles.input}
// // //         />
// // //         <button type="submit" style={styles.submitButton}>Add Food Item</button>
// // //       </form>

// // //       <div style={styles.orderSummary}>
// // //         <h3>Your Orders</h3>
// // //         {orders.length > 0 ? (
// // //           <div>
// // //             <p style={styles.orderText}>Total Orders: {orders.length}</p>
// // //             <ul style={styles.orderList}>
// // //               {orders.map((order, index) => (
// // //                 <li key={index} style={styles.orderItem}>
// // //                   {order.name} - ${order.price}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //             <p style={styles.orderText}>
// // //               <strong>Total Cost: </strong>${orders.reduce((total, item) => total + item.price, 0).toFixed(2)}
// // //             </p>
// // //             <button onClick={handleGoToOrderPage} style={styles.viewOrderButton}>
// // //               Go to Order Page
// // //             </button>
// // //           </div>
// // //         ) : (
// // //           <p style={styles.noOrdersText}>No orders placed yet.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default FoodItems;



// // import React, { useState, useEffect } from 'react';
// // import OrderButton from '../components/OrderButton';

// // function FoodItems() {
// //   const [foodItems, setFoodItems] = useState([]);
// //   const [newFoodItem, setNewFoodItem] = useState({
// //     name: '',
// //     description: '',
// //     price: '',
// //     image_url: '',
// //   });

// //   // Fetch food items from the backend
// //   useEffect(() => {
// //     fetch('http://127.0.0.1:5000/api/food-items')
// //       .then((response) => response.json())
// //       .then((data) => setFoodItems(data))
// //       .catch((error) => console.error('Error fetching food items:', error));
// //   }, []);

// //   // Handle ordering
// //   const handleOrder = (foodItemId) => {
// //     console.log(`Ordering food item ID: ${foodItemId}`);
// //     alert(`Order placed for food item ID: ${foodItemId}`);
// //   };

// //   // Handle form input changes
// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     setNewFoodItem({ ...newFoodItem, [name]: value });
// //   };

// //   // Handle adding a new food item
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     fetch('http://127.0.0.1:5000/api/food-items', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(newFoodItem),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setFoodItems([...foodItems, data]);
// //         setNewFoodItem({ name: '', description: '', price: '', image_url: '' });
// //       })
// //       .catch((error) => console.error('Error adding food item:', error));
// //   };

// //   // Handle deleting a food item
// //   const handleDelete = (itemId) => {
// //     fetch(`http://127.0.0.1:5000/api/food-items/${itemId}`, {
// //       method: 'DELETE',
// //     })
// //       .then((response) => {
// //         if (response.ok) {
// //           setFoodItems(foodItems.filter((item) => item.id !== itemId));
// //           alert('Item deleted successfully!');
// //         } else {
// //           alert('Error deleting item');
// //         }
// //       })
// //       .catch((error) => console.error('Error deleting food item:', error));
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.header}>Food Menu</h2>

// //       <div style={styles.foodContainer}>
// //         {foodItems.length > 0 ? (
// //           foodItems.map((foodItem) => (
// //             <div key={foodItem.id} style={styles.foodItem}>
// //               <img src={foodItem.image_url} alt={foodItem.name} style={styles.image} />
// //               <h3>{foodItem.name}</h3>
// //               <p>{foodItem.description}</p>
// //               <p><strong>Price:</strong> ${foodItem.price}</p>
// //               <OrderButton onOrder={() => handleOrder(foodItem.id)} />
// //               <button onClick={() => handleDelete(foodItem.id)} style={styles.deleteButton}>
// //                 Delete
// //               </button>
// //             </div>
// //           ))
// //         ) : (
// //           <p>Loading food items...</p>
// //         )}
// //       </div>

// //       <h3>Add New Food Item</h3>
// //       <form onSubmit={handleSubmit} autoComplete="on" style={styles.form}>
// //         <input type="text" name="name" value={newFoodItem.name} onChange={handleInputChange} placeholder="Food Name" required autoComplete="name" style={styles.input} />
// //         <input type="text" name="description" value={newFoodItem.description} onChange={handleInputChange} placeholder="Food Description" required autoComplete="off" style={styles.input} />
// //         <input type="number" name="price" value={newFoodItem.price} onChange={handleInputChange} placeholder="Food Price" required autoComplete="off" style={styles.input} />
// //         <input type="text" name="image_url" value={newFoodItem.image_url} onChange={handleInputChange} placeholder="Image URL" required autoComplete="url" style={styles.input} />
// //         <button type="submit" style={styles.addButton}>Add Food Item</button>
// //       </form>
// //     </div>
// //   );
// // }

// // // Inline Styling
// // const styles = {
// //   container: {
// //     textAlign: 'center',
// //     padding: '20px',
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   header: {
// //     color: '#333',
// //     marginBottom: '10px',
// //   },
// //   foodContainer: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
// //     gap: '20px',
// //     justifyContent: 'center',
// //     padding: '20px',
// //   },
// //   foodItem: {
// //     border: '1px solid #ddd',
// //     padding: '15px',
// //     borderRadius: '8px',
// //     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //     backgroundColor: '#fff',
// //     transition: 'transform 0.2s',
// //     textAlign: 'center',
// //   },
// //   image: {
// //     width: '100%',
// //     height: '180px',
// //     objectFit: 'cover',
// //     borderRadius: '8px',
// //   },
// //   deleteButton: {
// //     marginTop: '10px',
// //     padding: '8px 12px',
// //     backgroundColor: '#ff4d4d',
// //     color: '#fff',
// //     border: 'none',
// //     cursor: 'pointer',
// //     borderRadius: '5px',
// //   },
// //   addButton: {
// //     marginTop: '10px',
// //     padding: '8px 12px',
// //     backgroundColor: '#4CAF50',
// //     color: '#fff',
// //     border: 'none',
// //     cursor: 'pointer',
// //     borderRadius: '5px',
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     marginTop: '20px',
// //   },
// //   input: {
// //     width: '80%',
// //     padding: '8px',
// //     marginBottom: '10px',
// //     border: '1px solid #ddd',
// //     borderRadius: '5px',
// //   },
// // };

// // export default FoodItems;



import React, { useState, useEffect } from 'react';
import OrderButton from '../components/OrderButton';

function FoodItems() {
  const [foodItems, setFoodItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
  });

  // Fetch food items from the backend
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/food-items')
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error('Error fetching food items:', error));
  }, []);

  // Handle ordering a food item
  const handleOrder = (foodItem) => {
    setOrders([...orders, foodItem]);
  };

  // Handle deleting an order
  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Handle deleting a food item from the menu
  const handleDeleteFood = (id) => {
    fetch(`http://127.0.0.1:5000/api/food-items/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setFoodItems(foodItems.filter((item) => item.id !== id));
        }
      })
      .catch((error) => console.error('Error deleting food item:', error));
  };

  // Handle input change for adding food
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFoodItem({ ...newFoodItem, [name]: value });
  };

  // Handle form submission for adding food
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/api/food-items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFoodItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setFoodItems([...foodItems, data]);
        setNewFoodItem({ name: '', description: '', price: '', image_url: '' });
      })
      .catch((error) => console.error('Error adding food item:', error));
  };

  return (
    <div>
      <h2>Food Menu</h2>
      <div className="food-items-container">
        {foodItems.length > 0 ? (
          foodItems.map((foodItem) => (
            <div key={foodItem.id} className="food-item">
              <img src={foodItem.image_url} alt={foodItem.name} />
              <h3>{foodItem.name}</h3>
              <p>{foodItem.description}</p>
              <p><strong>Price:</strong> ${foodItem.price}</p>
              <OrderButton onOrder={() => handleOrder(foodItem)} />
              <button onClick={() => handleDeleteFood(foodItem.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>Loading food items...</p>
        )}
      </div>

      <h3>Add New Food Item</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newFoodItem.name}
          onChange={handleInputChange}
          placeholder="Food Name"
          required
        />
        <input
          type="text"
          name="description"
          value={newFoodItem.description}
          onChange={handleInputChange}
          placeholder="Food Description"
          required
        />
        <input
          type="number"
          name="price"
          value={newFoodItem.price}
          onChange={handleInputChange}
          placeholder="Food Price"
          required
        />
        <input
          type="text"
          name="image_url"
          value={newFoodItem.image_url}
          onChange={handleInputChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">Add Food Item</button>
      </form>

      <h2>Orders</h2>
      <div className="orders-container">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} className="order-item">
              <h3>{order.name}</h3>
              <p>{order.description}</p>
              <p><strong>Price:</strong> ${order.price}</p>
              <button onClick={() => handleDeleteOrder(order.id)}>Remove Order</button>
            </div>
          ))
        ) : (
          <p>No orders placed yet.</p>
        )}
      </div>

      <style>{`
        .food-items-container, .orders-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .food-item, .order-item {
          border: 1px solid #ddd;
          padding: 10px;
          width: 250px;
          text-align: center;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .food-item img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
        }
        button {
          padding: 5px 10px;
          margin: 5px;
          background-color: #ff4d4d;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background-color: #cc0000;
        }
      `}</style>
    </div>
  );
}

export default FoodItems;



