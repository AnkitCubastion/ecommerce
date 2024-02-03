import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/user", {
        params: { email: formData.email, password: formData.password },
      });

      if (response.data.length === 0) {
        alert("Invalid email or password. Please try again.");
        return;
      }
      console.log(response);
      alert("User logged in successfully:");
      localStorage.setItem("email", formData.email);
      navigate("/");
    } catch (error) {
      alert("Error logging in:");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="login-subcontainer">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="login-subcontainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="login-subcontainer">
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
          <div className="login-subcontainer">
            <p>Not a member?</p>
            <Link to={"/signup"}>
              <button className="signup-btn">Signup</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
