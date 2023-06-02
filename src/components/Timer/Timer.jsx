import React, { useEffect } from 'react'
import { useTimer } from 'react-timer-hook';
import "./Timer.css"

export default function MyTimer({ expiryTimestamp,duration,setInputdisabled ,correct,wrong,accuracy,setShowalert,showalert,setSpeed}) {
   
    const {seconds,minutes,isRunning,start,pause,resume,restart,} 
    = useTimer({ expiryTimestamp, onExpire: () =>{
        setSpeed(parseInt((correct+wrong)/(duration/60)))
         setShowalert(true);
        }});

  
    
  
  useEffect(() => {
    setInputdisabled(!isRunning);
  }, [isRunning]);

    return (
    <div className='timer'>
    {!showalert && <>
      <button onClick={start} className='btn'>Start</button>
      <button onClick={pause} className='btn'>Pause</button>
        <div id='time'>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>

        <button onClick={resume} className='btn'>Resume</button>
        <button onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + duration);
          restart(time)
        }} className='btn'>Restart</button>
        
        </> }
    </div>
    );
  }