

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      {/* <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Myquizz</h1>
        <div className='pl-8 gap-4' >
          <a href="/" className="mr-4 hover:underline">Home</a>
          <a href="/signin" className="mr-4 hover:underline">Sign In</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
        </div>
      </nav> */}

{/* <nav className="container mx-auto flex justify-start items-center gap-8">
  <h1 className="text-2xl font-bold">Myquizz</h1>
  <div className='flex gap-4'>
    <a href="/" className="hover:underline">Home</a>
    <a href="/signin" className="hover:underline">Sign In</a>
    <a href="/signup" className="hover:underline">Sign Up</a>
  </div>
</nav> */}

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
