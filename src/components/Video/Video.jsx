import React from 'react'
import "./Video.css"
import {FcPrevious,FcNext } from "react-icons/fc";
import { videos } from '../../utils';

const Video = ({src,index,setIndex}) => {

   var video_id = document.getElementById("video");
   video_id?.addEventListener("ended", function() {
   
    console.log(`${video_id} The video has ended`);
});
  return (
    <div className="container">
   
      <div className='video'>
        <span id='prev' onClick={()=>setIndex(prev =>prev > 0 ? prev-1 : prev)}><FcPrevious/></span>
        <iframe width="750" height="400" src={src} title={index} controls id="video"></iframe>
        <span id='next' onClick={()=>setIndex(prev =>prev < 9  ? prev+1 : prev)}><FcNext/></span>
      </div>
   
      <div className="pagination">
      
        {videos.map((ele,i)=>(
            <span className={`boxx ${i === index ? "active" : ""}`} key={Math.random()}>{i+1}</span>     
        ))
        }
      
      </div>
    </div>
  )
}

export default Video