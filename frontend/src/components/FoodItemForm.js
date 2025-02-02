// import { useState } from "react";
// import { Formik, Form, Field } from "formik";

// function FoodItemForm({ addFoodItem }) {
//   const [message, setMessage] = useState("");

//   return (
//     <Formik
//       initialValues={{ name: "", price: "", description: "", image_url: "" }}
//       onSubmit={(values, { resetForm }) => {
//         fetch("http://127.0.0.1:5000/api/food_items", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             addFoodItem({ ...values, id: data.id });
//             setMessage("Food item added successfully!");
//             resetForm();
//           });
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <label>Name:</label>
//           <Field type="text" name="name" required />
//           <label>Price:</label>
//           <Field type="number" name="price" required />
//           <label>Description:</label>
//           <Field type="text" name="description" />
//           <label>Image URL:</label>
//           <Field type="text" name="image_url" required />
//           <button type="submit" disabled={isSubmitting}>Add Food Item</button>
//           {message && <p>{message}</p>}
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default FoodItemForm;



import React, { useState } from 'react';

const FoodItemForm = ({ onAddFoodItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFoodItem = { name, price: parseFloat(price) };
    onAddFoodItem(newFoodItem);
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Food Item</h2>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Price:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <button type="submit">Add Food Item</button>
    </form>
  );
};

export default FoodItemForm;
