import React from "react";
import "./navbar.css";
import NavLinks from "./navLinks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  // console.log(amount);

  const email = localStorage.getItem("email");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <NavLinks />
      <p>{amount}</p>
      {email ? (
        <>
          <p className="true-user">Welcome, {email}!</p>
          <button onClick={handleClick} className="logout-btn-nav">
            Logout
          </button>
        </>
      ) : (
        <p className="false-user">Please Login!</p>
      )}
    </div>
  );
};

export default Navbar;
