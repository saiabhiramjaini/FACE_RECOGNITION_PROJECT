import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      setLoginUser(res.data.user);
      console.log("send");
      navigate("/");
    });
  };

  return (
    <>
      <body className="login-body">
        <div className="login-card">
          <h2>Login</h2>
          <h3>Enter your credentials</h3>
          <div className="login-form">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
            ></input>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            ></input>
            <a href="/signup" className="create-account">
              Create account
            </a>
            <a href="/signup" className="forgot-password">
              forgot password?
            </a>
            <button className="button" onClick={login}>
              LOGIN
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
