import React from 'react'
import { MdDashboardCustomize } from "react-icons/md";
import {  BsFillClockFill } from "react-icons/bs";
import "./Box.css"
import { Link } from 'react-router-dom';

const Box = ({title,desc,icon,color}) => {
  return (
    <>
    <div className='box'>
      <Link to={`/test/${title}`} style={{"textDecoration":"none"}}>
          <span id="img" style={{"color":`${color}`}}>{icon}</span>
          <p id='title'>{title}</p>
           <p id='desc'>{desc}</p>
       </Link>
    </div>
    </>
  )
}

export default Box