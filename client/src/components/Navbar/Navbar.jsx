import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
         <Link className='nav_text' to ="/home">CRUD</Link> 
        </div>
        <div className="nav_link">
        <Link className='nav_text' to ="/allusers">All Users</Link> 
        <Link className='nav_text' to ="/adduser">Add User</Link> 
        <Link className='nav_text' to ="/logout">Logout</Link> 
        </div>
        
      </div>
    </>
  )
}

export default Navbar
