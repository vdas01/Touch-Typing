import React from 'react'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tutorial from './Pages/Tutorial/Tutorial'
import Test from './Pages/Test/Test'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
       <Navbar/>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/tut' element={<Tutorial/>}/>
           <Route path="/test/:type" element={<Test/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App