import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllUsers.css";
const AllUsers = () => {
  const navigate = useNavigate();
  const [users, setusers] = useState([]);

  // getting all the users info
  const getAllusers = async () => {
    let res = await axios.get("http://localhost:8000/info");
    setusers(res.data);
  };
  // Delete the users.......
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/${id}`);
    getAllusers();
  };
  //Call for rendering the edit user page....
  const EditUser = (id) => {
    navigate(`/edit/${id}`);
  };
  useEffect(() => {
    getAllusers();
  }, []);
  return (
    <>
      <div className="user_table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          {users.map((user, key) => (
            <tbody key={key}>
              <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <i
                    className="fas fa-user-edit edit"
                    onClick={() => EditUser(user._id)}
                  ></i>
                  <i
                    className="fas fa-trash-alt delete"
                    onClick={() => deleteUser(user._id)}
                  ></i>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllUsers;
