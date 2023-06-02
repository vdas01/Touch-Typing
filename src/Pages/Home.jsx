import React from 'react'
import "./Home.css"
import Dashboard from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <h2>Online Typing Speed Test Tool</h2>
      <h3>Practice with custom timer and become the fastest TypingNinja</h3>
      <Dashboard/>
   
    </div>
  )
}

export default Home