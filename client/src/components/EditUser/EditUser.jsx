import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditUser.css";
const EditUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  //get the id from the URL....
  const { id } = useParams();

  //Getting value from input....
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Get previous data when render this page....
  const loadUserDetails = async () => {
    const res = await axios.get(`http://localhost:8000/${id}`);
    setUser(res.data);
  };
  //Update the data of the user details...
  const EditUserDetails = async () => {
    await axios.put(`http://localhost:8000/${id}`, user);
    alert("Edited Successfully.");
    navigate("/allusers");
  };
  useEffect(() => {
    loadUserDetails();
  }, []);
  return (
    <>
      <div className="editUser">
        <input
          className="inp"
          onChange={onValueChange}
          type="text"
          name="name"
          value={user.name}
          id="my-input"
          placeholder="Enter Your name"
        />
        <input
          className="inp"
          onChange={onValueChange}
          type="text"
          name="username"
          value={user.username}
          id="my-input"
          placeholder="Enter Your usename"
        />
        <input
          className="inp"
          onChange={onValueChange}
          type="email"
          name="email"
          value={user.email}
          id="my-input"
          placeholder="Enter Your Email"
        />
        <input
          className="inp"
          onChange={onValueChange}
          type="text"
          name="phone"
          value={user.phone}
          id="my-input"
          placeholder="Enter Your phone"
        />
        <button className="btn" onClick={EditUserDetails}>
          Edit User
        </button>
      </div>
    </>
  );
};

export default EditUser;
