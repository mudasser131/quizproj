import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const location = useLocation();

  // State for form data
  const [formData, setFormData] = useState({
    user_id: 5,
    username: "",
    email: "",
    password: "",
    school_id: 1,
    role: "teacher", // Default role
  });

  const [message, setMessage] = useState(""); // To display success or error messages

  // Update role based on query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const roleFromQuery = queryParams.get("role") || "teacher";
    setFormData((prevData) => ({
      ...prevData,
      role: roleFromQuery,
    }));
  }, [location.search]); // Re-run when location.search changes

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4020/user/create",
        formData
      );
      console.log("Response from Backend:", response.data); // Log the backend response
      setMessage("Sign up successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-md shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign Up as {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        {message && (
          <p className="text-sm text-center mt-4 text-red-500">{message}</p>
        )}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
