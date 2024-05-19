import React from 'react'
import './proto.css'
import { Link } from 'react-router-dom'
const Protofolio = () => {
  return (
    <div className='Protofolio' id='Projects'>
      <h1>My Projects </h1>
      <hr/>
        <div className='swipper'>
          
            <div className='swiper-img'>                    
              <div><img src='/img/img.png'alt=''/></div>
            </div>
            <div className='radio'>
               <button className='btns'><Link to="projects" style={{textDecoration:"none",color:"inherit"}}>All Projects</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Protofolio