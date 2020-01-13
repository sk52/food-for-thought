import React from "react";
import logo from "../logo.png";

function Header() {
  return (
    <div className="header">
      <p>Need a sprinkling of inspiration in the kitchen?</p>
      <p>Let me pepper your thoughts!</p>
      <p><img src={logo} width="180" height="225" alt="pepper your thoughts" /></p>
    </div>
  );
}

export default Header;
