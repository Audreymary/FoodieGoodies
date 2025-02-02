// // // import React from 'react';

// // // function OrderPage() {
// // //   return (
// // //     <div>
// // //       <h2>Your Orders</h2>
// // //       <p>This is the order page where the user can see their placed orders.</p>
// // //       {/* Here you can list all the orders or add more features */}
// // //     </div>
// // //   );
// // // }

// // // export default OrderPage;


// // import React from 'react';
// // import { useLocation } from 'react-router-dom';

// // function OrderPage() {
// //   const location = useLocation();
// //   const { orders } = location.state || {}; // Get orders from state passed via React Router

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.heading}>Your Orders</h2>
// //       {orders && orders.length > 0 ? (
// //         <div>
// //           <ul style={styles.orderList}>
// //             {orders.map((order, index) => (
// //               <li key={index} style={styles.orderItem}>
// //                 {order.name} - ${order.price}
// //               </li>
// //             ))}
// //           </ul>
// //           <p style={styles.orderText}>
// //             <strong>Total Cost:</strong> $
// //             {orders.reduce((total, item) => total + item.price, 0).toFixed(2)}
// //           </p>
// //         </div>
// //       ) : (
// //         <p style={styles.noOrdersText}>You haven't ordered anything yet.</p>
// //       )}
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
// //   orderList: {
// //     listStyleType: 'none',
// //     paddingLeft: '0',
// //   },
// //   orderItem: {
// //     fontSize: '18px',
// //     margin: '10px 0',
// //   },
// //   orderText: {
// //     fontSize: '20px',
// //     marginTop: '20px',
// //   },
// //   noOrdersText: {
// //     fontSize: '18px',
// //     color: '#888',
// //   },
// // };

// // export default OrderPage;



// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from './styles'; // Import the styles

// function OrderPage() {
//   const location = useLocation();
//   const { orders } = location.state || {}; // Get orders from state passed via React Router

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Your Orders</h2>
//       {orders && orders.length > 0 ? (
//         <div>
//           <ul style={styles.orderList}>
//             {orders.map((order, index) => (
//               <li key={index} style={styles.orderItem}>
//                 {order.name} - ${order.price}
//               </li>
//             ))}
//           </ul>
//           <p style={styles.orderText}>
//             <strong>Total Cost:</strong> $
//             {orders.reduce((total, item) => total + item.price, 0).toFixed(2)}
//           </p>
//         </div>
//       ) : (
//         <p style={styles.noOrdersText}>You haven't ordered anything yet.</p>
//       )}
//     </div>
//   );
// }

// export default OrderPage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles'; // Import the styles

function OrderPage() {
  const location = useLocation();
  const { orders } = location.state || {}; // Get orders from state passed via React Router

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Orders</h2>
      {orders && orders.length > 0 ? (
        <div>
          <ul style={styles.orderList}>
            {orders.map((order, index) => (
              <li key={index} style={styles.orderItem}>
                {order.name} - ${order.price}
              </li>
            ))}
          </ul>
          <p style={styles.orderText}>
            <strong>Total Cost:</strong> $
            {orders.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
        </div>
      ) : (
        <p style={styles.noOrdersText}>You haven't ordered anything yet.</p>
      )}
    </div>
  );
}

export default OrderPage;
