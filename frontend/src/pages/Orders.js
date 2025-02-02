


// import { useState, useEffect } from "react";

// function Orders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true); // To show loading state

//   // Fetch orders from the backend API
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/api/orders")
//       .then((response) => response.json())
//       .then((data) => {
//         setOrders(data);
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((error) => {
//         console.error("Error fetching orders:", error);
//         setLoading(false); // Set loading to false even if there's an error
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading orders...</div>; // Show loading message while fetching
//   }

//   return (
//     <div>
//       <h2>Orders</h2>
//       <ul>
//         {orders.length === 0 ? (
//           <li>No orders found</li>
//         ) : (
//           orders.map((order) => (
//             <li key={order.id}>
//               <strong>Order ID:</strong> {order.id} - <strong>Total Price:</strong> ${order.total_price}
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Orders;


import React, { useEffect, useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        <div style={styles.orderContainer}>
          {orders.map((order, index) => (
            <div key={index} style={styles.orderItem}>
              <img src={order.image_url} alt={order.name} style={styles.image} />
              <h3>{order.name}</h3>
              <p>{order.description}</p>
              <p><strong>Price:</strong> ${order.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders placed yet.</p>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '20px' },
  orderContainer: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' },
  orderItem: { width: '250px', padding: '10px', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center', backgroundColor: '#f9f9f9' },
  image: { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px' },
};

export default Orders;
