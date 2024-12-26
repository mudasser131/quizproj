

// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-blue-500 text-white p-4">

// <nav className="container mx-auto flex items-center">
//   <h1 className="text-2xl font-bold">Myquizz</h1>
//   <div className='ml-auto flex gap-4 pr-9'>
//     <a href="/" className="hover:underline">Home</a>
//     <a href="/signin" className="hover:underline">Sign In</a>
//     <a href="/signup" className="hover:underline">Sign Up</a>
//   </div>
// </nav>



//     </header>
//   );
// };

// export default Header;
// import React, { useState } from 'react';

// const Header = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   return (
//     <header className="bg-blue-500 text-white p-4">
//      <nav className="container mx-auto flex items-center py-4">
//             <h1 className="text-2xl font-bold">Myquizz</h1>
//             <div className="ml-auto flex gap-4 pr-9 relative">
//                 <a href="/" className="hover:underline">Home</a>
//                 <div className="relative">
//                     <button 
//                         onClick={toggleDropdown} 
//                         className="hover:underline focus:outline-none">
//                         Sign In
//                     </button>
//                     {dropdownVisible && (
//                         <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
//                             <a href="/signin/teacher" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In as Teacher</a>
//                             <a href="/signin/student" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In as Student</a>
//                             <a href="/signin/school" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In as School</a>
//                         </div>
//                     )}
//                 </div>
//                 <div className="relative">
//                     <button 
//                         onClick={toggleDropdown} 
//                         className="hover:underline focus:outline-none">
//                         Sign Up
//                     </button>
//                     {dropdownVisible && (
//                         <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
//                             <a href="/signup/teacher" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up as Teacher</a>
//                             <a href="/signup/student" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up as Student</a>
//                             <a href="/signup/school" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up as School</a>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';

const Navbar = () => {
    const [signInDropdownVisible, setSignInDropdownVisible] = useState(false);
    const [signUpDropdownVisible, setSignUpDropdownVisible] = useState(false);

    const toggleSignInDropdown = () => {
        setSignInDropdownVisible(!signInDropdownVisible);
        if (signUpDropdownVisible) setSignUpDropdownVisible(false); // Close other dropdown
    };

    const toggleSignUpDropdown = () => {
        setSignUpDropdownVisible(!signUpDropdownVisible);
        if (signInDropdownVisible) setSignInDropdownVisible(false); // Close other dropdown
    };

    return (
        
        <nav className="sticky top-0 bg-white z-10 text-pink-600 shadow-md">
                <div className="container mx-auto flex items-center py-4 px-5">
                    <h1 className="text-2xl font-bold">Myquizz</h1>
                    <div className="ml-auto flex gap-6 pr-9 relative">
                        <a href="/" className="hover:underline text-lg">Home</a>
                        <div className="relative">
                            <button 
                                onClick={toggleSignInDropdown} 
                                className="hover:underline focus:outline-none text-lg">
                                Sign In
                            </button>
                            {signInDropdownVisible && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                                    <a href="/signin/teacher" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In as Teacher</a>
                                    <a href="/signin/student" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In as Student</a>
                                    <a href="/signin/school" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In as School</a>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <button 
                                onClick={toggleSignUpDropdown} 
                                className="hover:underline focus:outline-none text-lg">
                                Sign Up
                            </button>
                            {signUpDropdownVisible && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                                    <a href="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up as Teacher</a>
                                    <a href="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up as Student</a>
                                    <a href="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up as School</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;

