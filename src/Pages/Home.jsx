import React from 'react'
import "./Home.css"
import Dashboard from '../components/Dashboard/Dashboard'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'


const Home = () => {
  const {stored_arr,dispatch} = useContext(StoreContext);
  const funClear = ()=>{
       dispatch({type:"CLEAR"});
  }
  
  return (
    <div className='home'>
      <h2 id='home_title'>Typing Speed Test Tool</h2>
      <h3 id='home_desc'>Practice with custom timer and become the fastest TypingNinja</h3>
      <div id="home_btn">
      {stored_arr.length > 0 && 
     <Link to= "/chart" >
         <button id="compare">Compare your results</button>
      </Link>
      }
     {stored_arr.length > 0 && 
     
             <button onClick={()=>funClear()}>Clear Results</button>
     }
     </div>
      <Dashboard/>
   
    </div>
  )
}

export default Home