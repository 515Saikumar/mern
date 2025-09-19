import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Library</div>
      <ul className="navbar-links">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/">Books</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
