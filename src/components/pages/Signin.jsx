import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  // Extract role from URL query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roleFromQuery = queryParams.get("role") || "user"; // Default to "user" if not specified

  // Local state to store input values and response message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4020/user/login', {
        email,
        password,
        role: roleFromQuery, // Include the role in the login request
      });

      // Check if login was successful
      if (response.status === 200) {
        setMessage('Login successful!');
        // Redirect or perform further actions as necessary
        // For example: window.location.href = "/dashboard";
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign In as {roleFromQuery.charAt(0).toUpperCase() + roleFromQuery.slice(1)}
        </h2>
        
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
        
        {/* Display message after submission */}
        {message && <p className="text-sm text-center mt-4 text-red-500">{message}</p>}
        
        {/* Sign Up Link */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
