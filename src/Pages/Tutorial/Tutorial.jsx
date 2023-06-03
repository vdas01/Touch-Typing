import React, { useState } from 'react'
import "./Tutorial.css"
import { videos } from '../../utils'
import Video from '../../components/Video/Video'

const Tutorial = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='tutorial'>

       <h2>Learn Grow and Become a TypingNinja</h2>
       
         <div className="videoo">
            <Video src={videos[index]} index={index} setIndex={setIndex}/>
         </div>
         
    </div>
  )
}

export default Tutorial