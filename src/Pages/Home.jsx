import React from 'react'
import "./Home.css"
import Dashboard from '../components/Dashboard/Dashboard'


const Home = () => {
  return (
    <div className='home'>
      <h2 id='home_title'>Online Typing Speed Test Tool</h2>
      <h3 id='home_desc'>Practice with custom timer and become the fastest TypingNinja</h3>
      <Dashboard/>
   
    </div>
  )
}

export default Home