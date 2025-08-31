// src/AuthUI.jsx
import React, { useState } from "react";
import axios from "axios";

const AuthUI = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Register user
  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error in registration");
    }
  };

  // Login user
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      setMessage("Login successful ✅");
      console.log("User Data:", res.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error in login");
    }
  };

  return (
    <div style={{ width: "300px", margin: "auto", padding: "20px" }}>
      <h2>Doddy_Ads</h2>

      <h3>Register</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={handleRegister}>Register</button>

      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "20px", color: "green" }}>{message}</p>
    </div>
  );
};

export default AuthUI;
