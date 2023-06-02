import React from 'react'
import "./Navbar.css"
import {  BsFillKeyboardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
          <div className="logo">
              <span id='logo_img'><BsFillKeyboardFill/></span>
              <span id="logo_text">TypingNinja</span>
          </div>
          
          <div className="info">
              <Link to="/" style={{"textDecoration":"none","color":"red"}}>Home</Link>
               <Link to="/tut" style={{"textDecoration":"none","color":"red"}}>Tutorial</Link>
          </div>
    </div>
  )
}

export default Navbar