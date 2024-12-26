import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";

import Landingpage from "./components/pages/Landingpage";
import SignUp from "./components/pages/Signup";
import SignIn from "./components/pages/Signin";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <Header />
      {/* <Landingpage /> */}
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;
