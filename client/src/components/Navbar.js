import React from "react";
import logo from "../logo.png";

function NavBar() {
  return (
    <nav className="nav">
      <p className="home">
        Food for Thought
      </p>
      <p><img src={logo} width="180" height="225" alt="pepper your thoughts" className="nav-img"/></p>
    </nav>
  );
}

export default NavBar;
