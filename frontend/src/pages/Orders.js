import React from 'react';

function Orders({ orders = [], setOrders }) {
  // Function to remove an order
  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Orders</h2>

      {orders.length > 0 ? (
        <div style={styles.orderList}>
          {orders.map((order, index) => (
            <div key={index} style={styles.orderItem}>
              <img src={order.image_url} alt={order.name} style={styles.image} />
              <div style={styles.details}>
                <h3>{order.name}</h3>
                <p>{order.description}</p>
                <p><strong>Price:</strong> ${order.price}</p>
                <button onClick={() => handleDeleteOrder(order.id)} style={styles.deleteButton}>
                  Remove Order
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noOrders}>No orders placed yet.</p>
      )}
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  orderList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    marginRight: '15px',
  },
  details: {
    flex: 1,
  },
  deleteButton: {
    background: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  noOrders: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#666',
  },
};

export default Orders;
