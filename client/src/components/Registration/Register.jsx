import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
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

  const register = () => {
    const { name,email, password } = user;
    if (name && email && password) {
      axios.post("http://localhost:8000/user/register", user).then((res) => {
        alert("Register Successful...")
        navigate("/");
      });
    } else {
      alert("Please fillup your informations.");
    }
  };
  return (
    <>
      <div className="reg_container">
        <div className="reg_wrapper">
          <div className="form">
            <div className="input_field">
              <input
                type="text"
                placeholder="Name"
                className="input"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="input_field">
              <input
                type="text"
                placeholder="Email"
                className="input"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <i className="fas fa-envelope"></i>
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
              <i className="fas fa-lock"></i>
            </div>
            <div className="btn" onClick={register}>
              Register
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
