
import {useEffect, useRef, useState} from 'react'
import "./App.css";

export default function App() {
  const keys = ['a','s','d','f','j','k','l'];
  const [index,setIndex] = useState(Math.floor(Math.random()*(keys.length)))
  //  const [typekey,setTypekey] = useState("");
  const [accuracy,setAccuracy] = useState(0);
  const [speed,setSpeed] = useState(0);
  const [time,setTime] = useState(0);
   const typekey = useRef("")
   let h2 = document.getElementById("key")
   const correct = useRef(0);
   const wrong = useRef(0);
let timer;
   const startTimer = ()=>{
   
   }
   const checkSpeed = ()=>{
     const total = correct.current + wrong.current;
   }

   const checkAccuracy = ()=>{
     const result = parseFloat(correct.current)/(parseFloat(correct.current) + parseFloat(wrong.current));
    
     setAccuracy(result.toFixed(2));
   }

  useEffect(()=>{
    checkAccuracy();
  },[correct.current,wrong.current])
   const update = ()=>{
     setIndex(Math.floor(Math.random()*(keys.length)))
   }

   const check = (e)=>{
    typekey.current = e.target.value;
    //  setTypekey(prev => e.target.value)
    //  console.log(typekey);
    if(typekey.current === "")
             h2.style.color = "black"
    else if(typekey.current === keys[index]){
         correct.current +=1;
        h2.style.color = "green";
      console.log("correct");
      update();
    }
    else if(typekey.current !== keys[index]){
      wrong.current+=1;
      h2.style.color = "red";
       setTimeout(()=>{
         update();
         h2.style.color = "black"
    },1000);
     
    }
    //  console.log(e.nativeEvent.data);
   }
   
 
 
  return (
    <div className="App">
      <h2 id="key">{keys[index]}</h2>
      <h5>{time}</h5>
      <div id="info">
       <span>Correct keys:- {correct.current}</span>
       <span>Incorrect keys:- {wrong.current}</span>
       <span>Accuracy:- {accuracy}%</span>
      </div>
     <input type="text" ref={typekey} onChange={(e)=>check(e)}/>
     <button onClick={()=>startTimer()}>Start</button>
     <button onClick={()=>clearInterval(timer)}>Stop</button>
    </div>
  );
}
