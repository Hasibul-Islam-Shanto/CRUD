import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";
const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  //Getting value from input....
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Sending value in Database and save there....
  const Event = async() => {
    const { name, username, email, phone } = user;
    if (name && username && email && phone) {
     await axios.post("http://localhost:8000/add", user).then((res) => {
        navigate("/allusers");
        alert("Data Saved.");
      });
    } else {
      alert("Invalid Input.");
    }
  };
  const authenticate = async() =>{
    try {
      const res = await axios.get("http://localhost:8000/user/auth", { withCredentials: true });
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }
   useEffect(() => {
    authenticate()
   }, [])
  return (
    <>
      <div className="addUser">
        <input
          className="inp"
          onChange={onValueChange}
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter Your name"
        />
        <input
          className="inp"
          onChange={onValueChange}
          type="text"
          name="username"
          value={user.username}
          placeholder="Enter Your usename"
        />
        <input
          className="inp"
          onChange={onValueChange}
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter Your Email"
        />
        <input
          className="inp"
          onChange={onValueChange}
          type="text"
          name="phone"
          value={user.phone}
          placeholder="Enter Your phone"
        />
        <button className="btn" onClick={Event}>
          Add User
        </button>
      </div>
    </>
  );
};

export default AddUser;
