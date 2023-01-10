import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signup = () => {
    const { name, username, password, cpassword } = user;
    if (name && username && password && cpassword) {
      // console.log(username);
      // axios.post("http://43.206.117.90:5000/signup", user)
      if (password !== cpassword) {
        alert("password and confirm password didnot match");
      }
      if (password.length < 8) {
        alert("password length must be more than 8");
      } else if (password === cpassword) {
        axios
          .post("http://localhost:3001/signup", user)
          .then((res) => {
            alert(res.data.message);
            navigate("/login");
          })
          .catch((err) => console.log("req error"));
      }
    } else {
      alert("enter all the fields");
    }
  };

  return (
    <>
      <body>
        <div className="login-card">
          <h2>Sign up</h2>
          <h3>Enter your credentials</h3>
          <div className="login-form">
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Your Name"
              onChange={handleChange}
            ></input>
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
            <input
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            ></input>
            <a href="/login">existing user?</a>
            <button className="button" onClick={signup}>
              SIGNUP
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default Register;
