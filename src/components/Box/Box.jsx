import React, { useState } from 'react'

import "./Box.css"
import { Link, useNavigate } from 'react-router-dom';

const Box = ({title,desc,icon,color}) => {
  const [time, setTime] = useState(0);
  const navigate = useNavigate();
  const finish = ()=>{
    navigate(`/test/${time} Minute Test`)
  }
  return (
    <>
    <div className='box'>
     {title !== "Custom Typing Test" && 
      <Link to={`/test/${title}`} style={{"textDecoration":"none"}}>
          <span id="img" style={{"color":`${color}`}}>{icon}</span>
          <p id='title'>{title}</p>
           <p id='desc'>{desc}</p>
          
       </Link>
     } 
     {title === "Custom Typing Test" && 
        <>
        <span id="img" style={{"color":`${color}`}}>{icon}</span>
          <p id='title'>{title}</p>
        
           <p id='desc'>{desc}</p>
           <div className="input_box">
           <input type="number" id="timee_input" value={time} onChange={(e)=>setTime(e.target.value)} placeholder='Enter duration of time'/>
           <input type="submit" id='timee_submit' value="Submit" onClick={()=>finish()}/>
           </div>
        </>
       
     }
       
    </div>
    </>
  )
}

export default Box