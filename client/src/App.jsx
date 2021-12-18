import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import AllUsers from "./components/AllUsers/AllUsers";
import EditUser from "./components/EditUser/EditUser";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
};

export default App;
