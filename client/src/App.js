import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Profile from './components/profile';
import NavBar from './components/navBar';
import SignUp from './components/signUp';
import Cookies from 'js-cookie';

function App() {
  const navigate = useNavigate();
  const [authToken, setAuthStatus] = useState(() => {
    return Cookies.get('auth');
  });

  const handleAuthStatus = (status) => {
    setAuthStatus(status);
  };

  console.log();

  return (
    <>
      <NavBar
        navigate={navigate}
        authToken={authToken}
        onAuthStatus={handleAuthStatus}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={<Login onAuthStatus={handleAuthStatus} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
