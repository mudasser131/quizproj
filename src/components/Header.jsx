import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

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
    <nav className="sticky top-0 h-[9vh] bg-white z-10 text-pink-600 shadow-md flex justify-center items-center">
      <div className="container flex justify-between px-1 py-3 ">
        <h1 className="text-3xl font-extrabold italic  shadow-lg">Myquizz</h1>
        <div className="ml-auto flex gap-20 relative px-2">
          <Link to="/" className="hover:underline text-lg font-bold italic">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleSignInDropdown}
              className="hover:underline focus:outline-none font-bold italic text-lg"
            >
              Sign In
            </button>
            {signInDropdownVisible && (
              <div className="absolute right-0 mt-2 w-max bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  to="/signin?role=teacher"
                  className="block px-4 text-gray-800 rounded-t-md hover:bg-gray-100 "
                >
                  as Teacher
                </Link>
                <Link
                  to="/signin?role=student"
                  className="block px-4 text-gray-800  hover:bg-gray-100"
                >
                  as Student
                </Link>
                <Link
                  to="/signin?role=school"
                  className="block px-4 text-gray-800 rounded-b-md hover:bg-gray-100"
                >
                  as School
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={toggleSignUpDropdown}
              className="hover:underline focus:outline-none text-lg font-bold italic"
            >
              Sign Up
            </button>
            {signUpDropdownVisible && (
              <div className="absolute right-0 mt-2 w-max bg-white border rounded-md shadow-lg">
                <Link
                  to="/signup?role=teacher"
                  className="block px-4 text-gray-800 rounded-t-md hover:bg-gray-100"
                >
                  as Teacher
                </Link>
                <Link
                  to="/signup?role=student"
                  className="block px-4 text-gray-800 hover:bg-gray-100"
                >
                  as Student
                </Link>
                <Link
                  to="/signup?role=school"
                  className="block px-4 text-gray-800 rounded-b-md hover:bg-gray-100"
                >
                  as School
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
