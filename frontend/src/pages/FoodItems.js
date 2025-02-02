// // // // import React, { useState, useEffect } from 'react';
// // // // import OrderButton from '../components/OrderButton';

// // // // function FoodItems() {
// // // //   const [foodItems, setFoodItems] = useState([]);
// // // //   const [orders, setOrders] = useState([]); // Store orders
// // // //   const [newFoodItem, setNewFoodItem] = useState({
// // // //     name: '',
// // // //     description: '',
// // // //     price: '',
// // // //     image_url: '',
// // // //   });

// // // //   useEffect(() => {
// // // //     fetch('http://127.0.0.1:5000/api/food-items')
// // // //       .then((response) => response.json())
// // // //       .then((data) => setFoodItems(data))
// // // //       .catch((error) => console.error('Error fetching food items:', error));
// // // //   }, []);

// // // //   const handleOrder = (foodItem) => {
// // // //     setOrders([...orders, foodItem]); // Add order to list
// // // //     alert(`Order placed for ${foodItem.name}`);
// // // //   };

// // // //   const handleInputChange = (event) => {
// // // //     const { name, value } = event.target;
// // // //     setNewFoodItem({ ...newFoodItem, [name]: value });
// // // //   };

// // // //   const handleSubmit = (event) => {
// // // //     event.preventDefault();
// // // //     fetch('http://127.0.0.1:5000/api/food_items', {
// // // //       method: 'POST',
// // // //       headers: { 'Content-Type': 'application/json' },
// // // //       body: JSON.stringify(newFoodItem),
// // // //     })
// // // //       .then((response) => response.json())
// // // //       .then((data) => {
// // // //         setFoodItems([...foodItems, data]);
// // // //         setNewFoodItem({ name: '', description: '', price: '', image_url: '' });
// // // //       })
// // // //       .catch((error) => console.error('Error adding food item:', error));
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h2 style={styles.heading}>Food Menu</h2>

// // // //       <div style={styles.foodItemsContainer}>
// // // //         {foodItems.length > 0 ? (
// // // //           foodItems.map((foodItem) => (
// // // //             <div key={foodItem.id} style={styles.foodItem}>
// // // //               <img src={foodItem.image_url} alt={foodItem.name} style={styles.image} />
// // // //               <h3>{foodItem.name}</h3>
// // // //               <p>{foodItem.description}</p>
// // // //               <p><strong>Price:</strong> ${foodItem.price}</p>
// // // //               <OrderButton onOrder={() => handleOrder(foodItem)} />
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p>Loading food items...</p>
// // // //         )}
// // // //       </div>

// // // //       <h3 style={styles.subHeading}>Add New Food Item</h3>
// // // //       <form onSubmit={handleSubmit} style={styles.form}>
// // // //         <input type="text" name="name" value={newFoodItem.name} onChange={handleInputChange} placeholder="Food Name" required style={styles.input} />
// // // //         <input type="text" name="description" value={newFoodItem.description} onChange={handleInputChange} placeholder="Food Description" required style={styles.input} />
// // // //         <input type="number" name="price" value={newFoodItem.price} onChange={handleInputChange} placeholder="Food Price" required style={styles.input} />
// // // //         <input type="text" name="image_url" value={newFoodItem.image_url} onChange={handleInputChange} placeholder="Image URL" required style={styles.input} />
// // // //         <button type="submit" style={styles.button}>Add Food Item</button>
// // // //       </form>

// // // //       <h3 style={styles.subHeading}>Orders</h3>
// // // //       <ul style={styles.orderList}>
// // // //         {orders.length > 0 ? (
// // // //           orders.map((order, index) => (
// // // //             <li key={index} style={styles.orderItem}>
// // // //               {order.name} - ${order.price}
// // // //             </li>
// // // //           ))
// // // //         ) : (
// // // //           <p>No orders yet.</p>
// // // //         )}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }

// // // // const styles = {
// // // //   container: {
// // // //     maxWidth: '900px',
// // // //     margin: '0 auto',
// // // //     textAlign: 'center',
// // // //     padding: '20px',
// // // //   },
// // // //   heading: {
// // // //     fontSize: '2em',
// // // //     fontWeight: 'bold',
// // // //     marginBottom: '20px',
// // // //   },
// // // //   subHeading: {
// // // //     fontSize: '1.5em',
// // // //     marginTop: '30px',
// // // //   },
// // // //   foodItemsContainer: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
// // // //     gap: '20px',
// // // //     marginTop: '20px',
// // // //   },
// // // //   foodItem: {
// // // //     backgroundColor: 'white',
// // // //     borderRadius: '10px',
// // // //     padding: '15px',
// // // //     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
// // // //     textAlign: 'center',
// // // //     transition: 'transform 0.2s ease-in-out',
// // // //   },
// // // //   image: {
// // // //     width: '100%',
// // // //     height: '180px',
// // // //     objectFit: 'cover',
// // // //     borderRadius: '8px',
// // // //   },
// // // //   form: {
// // // //     display: 'flex',
// // // //     flexDirection: 'column',
// // // //     alignItems: 'center',
// // // //     gap: '10px',
// // // //     marginTop: '20px',
// // // //   },
// // // //   input: {
// // // //     width: '100%',
// // // //     maxWidth: '400px',
// // // //     padding: '10px',
// // // //     border: '1px solid #ccc',
// // // //     borderRadius: '5px',
// // // //   },
// // // //   button: {
// // // //     backgroundColor: '#28a745',
// // // //     color: 'white',
// // // //     padding: '10px',
// // // //     border: 'none',
// // // //     borderRadius: '5px',
// // // //     cursor: 'pointer',
// // // //     marginTop: '10px',
// // // //   },
// // // //   buttonHover: {
// // // //     backgroundColor: '#218838',
// // // //   },
// // // //   orderList: {
// // // //     listStyle: 'none',
// // // //     padding: '0',
// // // //     textAlign: 'left',
// // // //     maxWidth: '400px',
// // // //     margin: '20px auto',
// // // //   },
// // // //   orderItem: {
// // // //     background: '#f8f9fa',
// // // //     padding: '10px',
// // // //     margin: '5px 0',
// // // //     borderRadius: '5px',
// // // //   },
// // // // };

// // // // export default FoodItems;


// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // function FoodItems() {
// // //   const [foodItems, setFoodItems] = useState([]);
// // //   const [orders, setOrders] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     fetch('http://127.0.0.1:5000/api/food-items')
// // //       .then((response) => response.json())
// // //       .then((data) => setFoodItems(data))
// // //       .catch((error) => console.error('Error fetching food items:', error));
// // //   }, []);

// // //   const handleOrder = (foodItem) => {
// // //     setOrders([...orders, foodItem]);
// // //     localStorage.setItem('orders', JSON.stringify([...orders, foodItem]));
// // //     alert(`Order placed for: ${foodItem.name}`);
// // //   };

// // //   const goToOrders = () => {
// // //     navigate('/orders');
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2>Food Menu</h2>
// // //       <button onClick={goToOrders} style={styles.orderButton}>View Orders</button>
// // //       <div style={styles.foodContainer}>
// // //         {foodItems.map((foodItem) => (
// // //           <div key={foodItem.id} style={styles.foodItem}>
// // //             <img src={foodItem.image_url} alt={foodItem.name} style={styles.image} />
// // //             <h3>{foodItem.name}</h3>
// // //             <p>{foodItem.description}</p>
// // //             <p><strong>Price:</strong> ${foodItem.price}</p>
// // //             <button onClick={() => handleOrder(foodItem)} style={styles.orderButton}>Order</button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // const styles = {
// // //   container: { textAlign: 'center', padding: '20px' },
// // //   foodContainer: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' },
// // //   foodItem: { width: '250px', padding: '10px', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center', backgroundColor: '#f9f9f9' },
// // //   image: { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px' },
// // //   orderButton: { backgroundColor: '#ff5733', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }
// // // };

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
// //   const [orders, setOrders] = useState([]); // State to track orders

// //   useEffect(() => {
// //     fetch('http://127.0.0.1:5000/api/food-items')
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setFoodItems(data);
// //       })
// //       .catch((error) => console.error('Error fetching food items:', error));
// //   }, []);

// //   const handleOrder = (foodItemId) => {
// //     const orderedItem = foodItems.find((food) => food.id === foodItemId);
// //     if (orderedItem) {
// //       setOrders([...orders, orderedItem]);
// //       alert(`Order placed for ${orderedItem.name}`);
// //     }
// //   };

// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     setNewFoodItem({ ...newFoodItem, [name]: value });
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     fetch('http://127.0.0.1:5000/api/food-items', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(newFoodItem),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setFoodItems([...foodItems, data]); // Add the new food item to the list
// //         setNewFoodItem({
// //           name: '',
// //           description: '',
// //           price: '',
// //           image_url: '',
// //         });
// //       })
// //       .catch((error) => console.error('Error adding food item:', error));
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.heading}>Food Menu</h2>

// //       <div style={styles.foodItemsContainer}>
// //         {foodItems.length > 0 ? (
// //           foodItems.map((foodItem) => (
// //             <div key={foodItem.id} style={styles.foodItem}>
// //               <img src={foodItem.image_url} alt={foodItem.name} style={styles.foodImage} />
// //               <h3 style={styles.foodName}>{foodItem.name}</h3>
// //               <p style={styles.foodDescription}>{foodItem.description}</p>
// //               <p style={styles.foodPrice}><strong>Price:</strong> ${foodItem.price}</p>
// //               <OrderButton onOrder={() => handleOrder(foodItem.id)} />
// //             </div>
// //           ))
// //         ) : (
// //           <p>Loading food items...</p>
// //         )}
// //       </div>

// //       <h3 style={styles.addNewFoodHeading}>Add New Food Item</h3>
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <input
// //           type="text"
// //           name="name"
// //           value={newFoodItem.name}
// //           onChange={handleInputChange}
// //           placeholder="Food Name"
// //           required
// //           style={styles.input}
// //         />
// //         <input
// //           type="text"
// //           name="description"
// //           value={newFoodItem.description}
// //           onChange={handleInputChange}
// //           placeholder="Food Description"
// //           required
// //           style={styles.input}
// //         />
// //         <input
// //           type="number"
// //           name="price"
// //           value={newFoodItem.price}
// //           onChange={handleInputChange}
// //           placeholder="Food Price"
// //           required
// //           style={styles.input}
// //         />
// //         <input
// //           type="text"
// //           name="image_url"
// //           value={newFoodItem.image_url}
// //           onChange={handleInputChange}
// //           placeholder="Image URL"
// //           required
// //           style={styles.input}
// //         />
// //         <button type="submit" style={styles.submitButton}>Add Food Item</button>
// //       </form>

// //       <div style={styles.orderSummary}>
// //         <h3>Your Orders</h3>
// //         {orders.length > 0 ? (
// //           <div>
// //             <p style={styles.orderText}>Total Orders: {orders.length}</p>
// //             <ul style={styles.orderList}>
// //               {orders.map((order, index) => (
// //                 <li key={index} style={styles.orderItem}>
// //                   {order.name} - ${order.price}
// //                 </li>
// //               ))}
// //             </ul>
// //             <p style={styles.orderText}>
// //               <strong>Total Cost: </strong>${orders.reduce((total, item) => total + item.price, 0).toFixed(2)}
// //             </p>
// //           </div>
// //         ) : (
// //           <p style={styles.noOrdersText}>No orders placed yet.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     padding: '20px',
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     fontFamily: 'Arial, sans-serif',
// //   },
// //   heading: {
// //     textAlign: 'center',
// //     fontSize: '32px',
// //     marginBottom: '30px',
// //   },
// //   foodItemsContainer: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
// //     gap: '20px',
// //     marginBottom: '40px',
// //   },
// //   foodItem: {
// //     backgroundColor: '#f9f9f9',
// //     padding: '20px',
// //     borderRadius: '8px',
// //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// //     textAlign: 'center',
// //     transition: 'transform 0.3s ease',
// //   },
// //   foodImage: {
// //     width: '100%',
// //     height: '200px',
// //     objectFit: 'cover',
// //     borderRadius: '8px',
// //   },
// //   foodName: {
// //     fontSize: '20px',
// //     fontWeight: 'bold',
// //     margin: '10px 0',
// //   },
// //   foodDescription: {
// //     fontSize: '16px',
// //     color: '#555',
// //   },
// //   foodPrice: {
// //     fontSize: '18px',
// //     fontWeight: 'bold',
// //     margin: '10px 0',
// //   },
// //   addNewFoodHeading: {
// //     marginTop: '40px',
// //     fontSize: '24px',
// //     fontWeight: 'bold',
// //     marginBottom: '20px',
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '10px',
// //     maxWidth: '400px',
// //     margin: '0 auto',
// //   },
// //   input: {
// //     padding: '10px',
// //     borderRadius: '4px',
// //     border: '1px solid #ddd',
// //     fontSize: '16px',
// //   },
// //   submitButton: {
// //     padding: '10px',
// //     backgroundColor: '#4CAF50',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //   },
// //   orderSummary: {
// //     marginTop: '40px',
// //     padding: '20px',
// //     backgroundColor: '#f2f2f2',
// //     borderRadius: '8px',
// //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
// //   },
// //   orderText: {
// //     fontSize: '18px',
// //     margin: '10px 0',
// //   },
// //   orderList: {
// //     listStyleType: 'none',
// //     paddingLeft: '0',
// //   },
// //   orderItem: {
// //     fontSize: '16px',
// //     margin: '5px 0',
// //   },
// //   noOrdersText: {
// //     fontSize: '16px',
// //     color: '#888',
// //   },
// // };

// // export default FoodItems;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import OrderButton from '../components/OrderButton';
// import styles from './styles'; // Import styles from styles.js

// function FoodItems() {
//   const [foodItems, setFoodItems] = useState([]);
//   const [newFoodItem, setNewFoodItem] = useState({
//     name: '',
//     description: '',
//     price: '',
//     image_url: '',
//   });
//   const [orders, setOrders] = useState([]); // State to track orders

//   const navigate = useNavigate(); // Hook to navigate between pages

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/api/food-items')
//       .then((response) => response.json())
//       .then((data) => {
//         setFoodItems(data);
//       })
//       .catch((error) => console.error('Error fetching food items:', error));
//   }, []);

//   const handleOrder = (foodItemId) => {
//     const orderedItem = foodItems.find((food) => food.id === foodItemId);
//     if (orderedItem) {
//       setOrders([...orders, orderedItem]);
//       alert(`Order placed for ${orderedItem.name}`);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewFoodItem({ ...newFoodItem, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://127.0.0.1:5000/api/food-items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newFoodItem),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setFoodItems([...foodItems, data]); // Add the new food item to the list
//         setNewFoodItem({
//           name: '',
//           description: '',
//           price: '',
//           image_url: '',
//         });
//       })
//       .catch((error) => console.error('Error adding food item:', error));
//   };

//   const handleGoToOrderPage = () => {
//     // Navigate to the order page and pass the orders via state
//     navigate('/orders', { state: { orders } });
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Food Menu</h2>

//       <div style={styles.foodItemsContainer}>
//         {foodItems.length > 0 ? (
//           foodItems.map((foodItem) => (
//             <div key={foodItem.id} style={styles.foodItem}>
//               <img src={foodItem.image_url} alt={foodItem.name} style={styles.foodImage} />
//               <h3 style={styles.foodName}>{foodItem.name}</h3>
//               <p style={styles.foodDescription}>{foodItem.description}</p>
//               <p style={styles.foodPrice}><strong>Price:</strong> ${foodItem.price}</p>
//               <OrderButton onOrder={() => handleOrder(foodItem.id)} />
//             </div>
//           ))
//         ) : (
//           <p>Loading food items...</p>
//         )}
//       </div>

//       <h3 style={styles.addNewFoodHeading}>Add New Food Item</h3>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="name"
//           value={newFoodItem.name}
//           onChange={handleInputChange}
//           placeholder="Food Name"
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="description"
//           value={newFoodItem.description}
//           onChange={handleInputChange}
//           placeholder="Food Description"
//           required
//           style={styles.input}
//         />
//         <input
//           type="number"
//           name="price"
//           value={newFoodItem.price}
//           onChange={handleInputChange}
//           placeholder="Food Price"
//           required
//           style={styles.input}
//         />
//         <input
//           type="text"
//           name="image_url"
//           value={newFoodItem.image_url}
//           onChange={handleInputChange}
//           placeholder="Image URL"
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.submitButton}>Add Food Item</button>
//       </form>

//       <div style={styles.orderSummary}>
//         <h3>Your Orders</h3>
//         {orders.length > 0 ? (
//           <div>
//             <p style={styles.orderText}>Total Orders: {orders.length}</p>
//             <ul style={styles.orderList}>
//               {orders.map((order, index) => (
//                 <li key={index} style={styles.orderItem}>
//                   {order.name} - ${order.price}
//                 </li>
//               ))}
//             </ul>
//             <p style={styles.orderText}>
//               <strong>Total Cost: </strong>${orders.reduce((total, item) => total + item.price, 0).toFixed(2)}
//             </p>
//             <button onClick={handleGoToOrderPage} style={styles.viewOrderButton}>
//               Go to Order Page
//             </button>
//           </div>
//         ) : (
//           <p style={styles.noOrdersText}>No orders placed yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FoodItems;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderButton from '../components/OrderButton';
import styles from './styles'; // Import styles from styles.js

function FoodItems() {
  const [foodItems, setFoodItems] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
  });
  const [orders, setOrders] = useState([]); // State to track orders

  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/food-items')
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data);
      })
      .catch((error) => console.error('Error fetching food items:', error));
  }, []);

  const handleOrder = (foodItemId) => {
    const orderedItem = foodItems.find((food) => food.id === foodItemId);
    if (orderedItem) {
      setOrders([...orders, orderedItem]);
      alert(`Order placed for ${orderedItem.name}`);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFoodItem({ ...newFoodItem, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/api/food-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFoodItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setFoodItems([...foodItems, data]); // Add the new food item to the list
        setNewFoodItem({
          name: '',
          description: '',
          price: '',
          image_url: '',
        });

        // After adding, navigate to OrderPage and pass orders
        navigate('/orders', { state: { orders: [...orders, data] } });
      })
      .catch((error) => console.error('Error adding food item:', error));
  };

  const handleGoToOrderPage = () => {
    // Navigate to the order page and pass the orders via state
    navigate('/orders', { state: { orders } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Food Menu</h2>

      <div style={styles.foodItemsContainer}>
        {foodItems.length > 0 ? (
          foodItems.map((foodItem) => (
            <div key={foodItem.id} style={styles.foodItem}>
              <img src={foodItem.image_url} alt={foodItem.name} style={styles.foodImage} />
              <h3 style={styles.foodName}>{foodItem.name}</h3>
              <p style={styles.foodDescription}>{foodItem.description}</p>
              <p style={styles.foodPrice}><strong>Price:</strong> ${foodItem.price}</p>
              <OrderButton onOrder={() => handleOrder(foodItem.id)} />
            </div>
          ))
        ) : (
          <p>Loading food items...</p>
        )}
      </div>

      <h3 style={styles.addNewFoodHeading}>Add New Food Item</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={newFoodItem.name}
          onChange={handleInputChange}
          placeholder="Food Name"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="description"
          value={newFoodItem.description}
          onChange={handleInputChange}
          placeholder="Food Description"
          required
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          value={newFoodItem.price}
          onChange={handleInputChange}
          placeholder="Food Price"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="image_url"
          value={newFoodItem.image_url}
          onChange={handleInputChange}
          placeholder="Image URL"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Add Food Item</button>
      </form>

      <div style={styles.orderSummary}>
        <h3>Your Orders</h3>
        {orders.length > 0 ? (
          <div>
            <p style={styles.orderText}>Total Orders: {orders.length}</p>
            <ul style={styles.orderList}>
              {orders.map((order, index) => (
                <li key={index} style={styles.orderItem}>
                  {order.name} - ${order.price}
                </li>
              ))}
            </ul>
            <p style={styles.orderText}>
              <strong>Total Cost: </strong>${orders.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
            <button onClick={handleGoToOrderPage} style={styles.viewOrderButton}>
              Go to Order Page
            </button>
          </div>
        ) : (
          <p style={styles.noOrdersText}>No orders placed yet.</p>
        )}
      </div>
    </div>
  );
}

export default FoodItems;
