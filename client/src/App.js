// import React, { useState, useEffect } from "react";
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as DB} from 'react-router-dom';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

// SERVICES
// import productService from './services/productService';
// // import { Router } from "express";

function App() {

  return (
    <DB>
      <div className="App">
        <NavBar/>
        <Header />
        <Search />
      </div>
    </DB>
  );
}

export default App;