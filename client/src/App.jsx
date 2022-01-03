import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import AllUsers from "./components/AllUsers/AllUsers";
import EditUser from "./components/EditUser/EditUser";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from './components/Registration/Register'
import LogOut from "./components/LogOut";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<LogOut />} />


      </Routes>
    </>
  );
};

export default App;
