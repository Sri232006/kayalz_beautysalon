import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/g_logo1.jpg";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (email && password) {

    
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("role", "admin");
      localStorage.setItem("auth", "true");
      navigate("/admin/dashboard");  
    } 
    else {
      
      localStorage.setItem("role", "user");
      localStorage.setItem("auth", "true");
      navigate("/dashboard");        
    }

  } else {
    alert("Please enter Email & Password");
  }
};

  return (
    <div className="login-container">

      <div className="login-box">
        <h2 className="title">SIGN IN</h2>

        <button className="google-btn">
  <img src={googleLogo} alt="google" />
  Continue with Google
</button>

        <p className="or">or</p>

        <h3 className="sub-title">LOGIN</h3>

        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;