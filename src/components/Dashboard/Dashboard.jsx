import React from 'react'
import "./Dashboaard.css"
import Box from '../Box/Box'
import { MdDashboardCustomize } from "react-icons/md";
import {  BsFillClockFill } from "react-icons/bs";

const Dashboard = () => {

  return (
    <div className='dashboard'>
    <Box title="Custom Typing Test" desc="Pratice with custom time limit and custom keys" icon={<MdDashboardCustomize/>} color="black"/>
    <Box title="1 Minute Test" desc="Practice and complete within 1 min" icon={<BsFillClockFill/>} color="green"/>
    <Box title="3 Minute Test" desc="Pratice and complete within 3 mins" icon={<BsFillClockFill/>} color="red"/>
    <Box title="5 Minute Test" desc="Pratice and complete within 5 mins" icon={<BsFillClockFill/>} color="blue"/>
    <Box title="10 Minute Test" desc="Practice and complete within 10 mins" icon={<BsFillClockFill/>} color="orange"/>
 
    </div>
  )
}

export default Dashboard