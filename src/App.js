import React from 'react';
import HomePage from './routes/HomePage';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/Signup';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes> 
        <Route path ='/' element={<Navbar />} >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} ></Route>
        <Route path='/signup' element={<SignupPage />}></Route></Route></Routes> 
    );
    }


export default App;