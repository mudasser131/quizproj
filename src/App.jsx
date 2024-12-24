


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Landingpage from './components/pages/Landingpage';
import SignUp from './components/pages/Signup';
import SignIn from './components/pages/Signin';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;