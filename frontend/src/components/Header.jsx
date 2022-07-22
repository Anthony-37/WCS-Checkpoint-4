import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/_Header.scss";

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/RoyalFamily">Royal Family</NavLink>
          </li>
          <li>
            <NavLink to="/RoyalAssets">Asset</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
