import React from 'react';

const SignUp = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-4 border rounded"
        />
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
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/signin" className="text-blue-500 hover:underline">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
