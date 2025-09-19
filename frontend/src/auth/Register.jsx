import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";

const Register = () => {
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ UserName, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "User registered successfully ✅");
      } else {
        toast.error(data.message || "Server error ❌");
      }
    } catch (error) {
      toast.error("Network error ❌");
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-title">Register</h2>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn">Register</button>

        <p className="redirect-text">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
