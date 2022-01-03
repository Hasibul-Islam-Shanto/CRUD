import axios from "axios";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async() => {
    const res = await axios.post("http://localhost:8000/user/login", user, {withCredentials : true})
    if(res.data){
      alert("Login Successful..")
      navigate('/home')
    }else{
      alert("Login failed.")
      navigate('/register')
    }
  };
  return (
    <>
      <div className="login_container">
        <div className="login_wrapper">
          <div className="form">
            <div className="input_field">
              <input
                type="text"
                placeholder="Email"
                className="input"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <i className="fas fa-user"> </i>
            </div>
            <div className="input_field">
              <input
                type="password"
                placeholder="Password"
                className="input"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <i className="fas fa-unlock-alt"> </i>
            </div>
            <div className="btn" onClick={login}>
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
