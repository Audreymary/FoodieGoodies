// // src/pages/LoginPage.js

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const history = useHistory();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Basic input validation
//     if (!username || !password) {
//       setErrorMessage('Please fill in both fields');
//       return;
//     }

//     // Send login request to the backend (assumed backend API is /api/login)
//     fetch('http://127.0.0.1:5000/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // If login is successful, redirect to user page
//           history.push('/user');
//         } else {
//           // Display error message if login failed
//           setErrorMessage('Invalid username or password');
//         }
//       })
//       .catch((error) => {
//         setErrorMessage('An error occurred. Please try again.');
//       });
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful') {
          alert('Login successful!');
          navigate('/dashboard'); // Redirect to a dashboard or home page
        } else {
          alert(data.message); // Show error message
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error connecting to the server.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
