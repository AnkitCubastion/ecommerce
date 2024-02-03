import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      const existingUser = await axios.get("http://localhost:3000/user", {
        params: { email: formData.email },
      });

      if (existingUser.data.length > 0) {
        alert(
          "User with this email already exists. Please use a different email."
        );
        return;
      }

      const response = await axios.post("http://localhost:3000/user", formData);
      console.log(response.data);
      alert("User signed up successfully:");
      navigate("/login");
    } catch (error) {
      alert("Error signing up:");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <div className="signup-subcontainer">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-subcontainer">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-subcontainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="signup-subcontainer">
            <button className="signup-btn" type="submit">
              Signup
            </button>
          </div>
          <div className="signup-subcontainer">
            <p>Already a member?</p>
            <Link to={"/login"}>
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
