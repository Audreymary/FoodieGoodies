// import { useState } from "react";

// function FoodItemCard({ item, onDelete, onOrder }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedItem, setUpdatedItem] = useState(item);

//   const handleUpdate = () => {
//     fetch(`http://127.0.0.1:5000/api/food_items/${item.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedItem),
//     }).then(() => setIsEditing(false));
//   };

//   return (
//     <div className="food-card">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={updatedItem.name}
//             onChange={(e) => setUpdatedItem({ ...updatedItem, name: e.target.value })}
//           />
//           <input
//             type="number"
//             value={updatedItem.price}
//             onChange={(e) => setUpdatedItem({ ...updatedItem, price: parseFloat(e.target.value) })}
//           />
//           <button onClick={handleUpdate}>Save</button>
//         </>
//       ) : (
//         <>
//           <h3>{item.name}</h3>
//           <p>{item.description}</p>
//           <p><strong>Price:</strong> ${item.price}</p>
//           <button onClick={() => onOrder(item)}>Order</button>
//           <button onClick={() => onDelete(item.id)}>Delete</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default FoodItemCard;

import React from 'react';

const FoodItemCard = ({ item, onUpdate, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleUpdate = () => {
    const updatedItem = { name: 'Updated ' + item.name, price: item.price + 1 };
    onUpdate(item.id, updatedItem);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodItemCard;
