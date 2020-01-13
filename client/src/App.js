import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';

function App() {  
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Header />
        <Search />
      </div>
    </Router>
  );
}

export default App;