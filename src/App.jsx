


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Landingpage from './components/pages/Landingpage';
import SignUp from './components/pages/Signup';
import SignIn from './components/pages/Signin';
import Error404 from './components/pages/Error404';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/error404" element={<Error404/>} />

        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;