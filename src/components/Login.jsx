import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 Save auth data in ONE place
  const saveAuth = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", user.role);
    localStorage.setItem("userId", user.id);
    localStorage.setItem("email", user.email);
  };

  // ================= NORMAL LOGIN =================
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter Email & Password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      const { token, user } = res.data;
      saveAuth(token, user);

      navigate(user.role === "admin" ? "/admin/dashboard" : "/Homepage");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">SIGN IN</h2>

        <GoogleLogin
  useOneTap={false}
  onSuccess={async (credentialResponse) => {
    if (!credentialResponse?.credential) {
      alert("Google did not return token. Please try again.");
      return;
    }

    const res = await axios.post(
      "http://localhost:5000/api/users/google",
      { token: credentialResponse.credential },
      { headers: { "Content-Type": "application/json" } }
    );

    const { token, user } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("role", user.role);
    localStorage.setItem("userId", user.id);
    localStorage.setItem("email", user.email);

    navigate("/Homepage");
  }}
  onError={() => alert("Google Login Failed")}
/>




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

        <button className="sign-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
