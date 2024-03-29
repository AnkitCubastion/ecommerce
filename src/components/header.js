import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
};

export default Header;
