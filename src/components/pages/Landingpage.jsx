import React from 'react';

const Landingpage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to The quiz!</h1>
      <p className="text-lg text-gray-700 mb-6">Test your knowledge with ease!</p>
      <div>
        <a href="/Signin" className="bg-blue-500 text-white px-6 py-2 rounded mr-4 hover:bg-blue-600">Sign In</a>
        <a href="/Signup" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">Sign Up</a>
      </div>
    </div>
  );
};

export default Landingpage;
