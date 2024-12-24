import React from 'react';

const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign In</button>
        <p className="text-sm text-center mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
