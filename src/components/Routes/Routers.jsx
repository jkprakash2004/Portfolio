import React from 'react'
import Navbar from '../navbars/Navbar'
import Home from '../homes/Home'
import Profile from '../profiles/Profile'
import Edu from '../Education/Edu'
import Skills from '../myskills/Skills'
import Exprieance from '../Exprience/Exprieance'
import Contact from '../Contact/Contact'
import Protofolio from '../Protofolio/Protofolio'
const Routers = () => {
  return (
    <div>
        
        <div style={{position:"sticky",top:"10px",zIndex:"999"}}>
      <Navbar/>
      </div>
      <Home/>
      <Profile/>
      <Edu/>
      <Skills/>      
      <Exprieance/>
      <Protofolio/>
      <Contact/>
        
    </div>
  )
}

export default Routers