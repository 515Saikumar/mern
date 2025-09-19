import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css"; // ✅ Import external CSS

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Login successful ✅");
      } else {
        toast.error(data.message || "Invalid credentials ❌");
      }
    } catch (error) {
      toast.error("Network error ❌");
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-title">Sign In</h2>

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

        <button type="submit" className="btn">Sign In</button>

        <p className="redirect-text">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
