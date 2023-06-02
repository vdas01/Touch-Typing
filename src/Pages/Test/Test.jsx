import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Test.css"
import MyTimer from '../../components/Timer/Timer';
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import Footer from '../../components/Footer/Footer';



const Test = () => {
    const navigate = useNavigate();
    const para = useParams();
    const duration = (para.type.split(" ")[0])*60;
    const [showalert, setShowalert] = useState(false);
    const keys = ['a','s','d','f','j','k','l'];
    const [initialkeys, setInitialkeys] = useState([]);
    const [accuracy,setAccuracy] = useState(0);
    const [inputdisabled, setInputdisabled] = useState(false);
    const [speed, setSpeed] = useState(0);
    const [index,setIndex] = useState(0)
    const initial = useRef(false);
    const typekey = useRef("")
    const correct = useRef(0);
    const wrong = useRef(0);

    const add = ()=>{
        setInitialkeys(prev => [...prev,keys[Math.floor(Math.random()*(keys.length))]]);
    }
    useEffect(() => {
        if(initial.current === false){
            initial.current = true;
        for(let i = 0;i<12;i++){
                add();
        }
    }
    }, []);



    const check = (e)=>{
        typekey.current = e.target.value;
        if(typekey.current === ""){}
        else if(typekey.current === initialkeys[index]){
             correct.current +=1;
            
             let key_elem = document.getElementById(`${index}`)
             key_elem.style.backgroundColor = "green";
             setIndex(prev => prev+1);
             add();
            
        }
        else if(typekey.current !==  initialkeys[index]){
          wrong.current+=1;
        
          let key_elem = document.getElementById(`${index}`)
          key_elem.style.backgroundColor = "red";
          setIndex(prev => prev+1);
          //adding key
          add();
          console.log("wrong")
        }
        //  console.log(e.nativeEvent.data);
       }

       const checkAccuracy = ()=>{
        const result = (parseFloat(correct.current)/(parseFloat(correct.current) + parseFloat(wrong.current)))*(100.00);
        setAccuracy(result.toFixed(2));
      }

      useEffect(()=>{
        checkAccuracy();
      },[correct.current,wrong.current])

      let textarea = document.getElementById('keys_box');
      if(textarea?.scrollHeight)
       textarea.scrollTop = textarea.scrollHeight;

      const time = new Date();
      time.setSeconds(time.getSeconds() + duration); 
      
      const finish = ()=>{
        setShowalert(false);
        navigate("/");
      }

  return (
    <div className='test'>
    { <>
        <div className="container">
            <h2>Analyze your typing speed in {para.type}</h2>
            <MyTimer expiryTimestamp={time} duration={duration} setInputdisabled={setInputdisabled} correct={correct.current}
                   wrong={wrong.current} accuracy={accuracy} setShowalert={setShowalert} showalert={showalert} setSpeed={setSpeed}/>
            <div className="text_info">
                <span id='correct_info'>Correct keys:- {correct.current}</span>
                <span id='wrong_info'>Wrong keys:- {wrong.current}</span>
                <span id='accuracy_info'>Accuracy:- {accuracy}%</span>
            </div>
            <div id="keys_box">
                {initialkeys.map((ele,i)=>(
                    <span className="text" id={i}>{ele}</span>
                ))
               }
            </div>
            <input type="text" ref={typekey} onChange={(e)=>check(e)} id='input' disabled={inputdisabled}/>
           
        </div>
        </>}
        {showalert &&  <>
                 <div className="alert">
                    <div id="alert_container">
                      <h3>Congratulation on completing the test</h3>
                      <h4>Result:-</h4>
                      <span id='correct'>Correct keys:- {correct.current}</span>
                      <span id="wrong">Wrong keys:- {wrong.current}</span>
                      <span id='speed'>Speed:- {speed} wpm</span>
                      <span id='accuracy'>Accuracy:- {accuracy}</span>
                      <span id='close' onClick={()=>finish()}>{"x"}</span>
                    </div>
                 
                 </div>

            
            </>}
    </div>
  )
}

export default Test