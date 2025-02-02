// // src/components/OrderButton.js
// import React from 'react';
// import PropTypes from 'prop-types';

// function OrderButton({ onOrder }) {
//   const handleOrderClick = () => {
//     if (typeof onOrder === 'function') {
//       onOrder();  // Calls the onOrder function passed as a prop
//     } else {
//       console.error("onOrder is not a function");
//     }
//   };

//   return (
//     <button onClick={handleOrderClick}>Order Now</button>
//   );
// }

// // Ensure that onOrder is passed as a function
// OrderButton.propTypes = {
//   onOrder: PropTypes.func.isRequired,
// };

// export default OrderButton;


import React from 'react';

function OrderButton({ onOrder }) {
  return (
    <button onClick={onOrder}>Order Now</button>
  );
}

export default OrderButton;
