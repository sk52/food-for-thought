import React from "react";
import { Link } from "react-router-dom";
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <nav className="nav">
      <Link className="home" to="./">
        Food For Thought
      </Link>
      <button className="sign-up">Sign Up</button>
    </nav>
  );
}

export default NavBar;
