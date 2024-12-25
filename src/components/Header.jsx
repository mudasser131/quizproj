

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">

<nav className="container mx-auto flex items-center">
  <h1 className="text-2xl font-bold">Myquizz</h1>
  <div className='ml-auto flex gap-4 pr-9'>
    <a href="/" className="hover:underline">Home</a>
    <a href="/signin" className="hover:underline">Sign In</a>
    <a href="/signup" className="hover:underline">Sign Up</a>
  </div>
</nav>
    </header>
  );
};

export default Header;
