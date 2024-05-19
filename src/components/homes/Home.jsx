import React from 'react';
import './home.css';
import {motion} from "framer-motion"
import WidowSize from '../../WidowSize';
import resume from "../images/resume.pdf"
const Home = () => {
  const downloadfile=()=>{
    alert("hii")
}
    const {width}=WidowSize()
  return (
    <div className='home' id='Home'>
        <div className='home-container'>
            <div  className={`home-leftSide ${width<=469?"mobile-leftside":"home-leftSide"}`}>
                <div className='title'><span>Hii I'AM </span><span className='skills'>FULLSTACK DEVELOPER </span></div>
                <span className='name'>K.Prakash </span>
                <span className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestiae voluptas reiciendis hic laborum illo.</span>
                <div><motion.button
                initial={{x:-100}}
                whileInView={{x:0}}
               className='cli-btn'>
                <a href={resume} download={"Resume"} style={{textDecoration:"none",color:"inherit"}}>download</a>
                </motion.button></div>
               
            
            </div>
            
            <div className='home-rightSide'> 

           <div>
            
           </div>
           
            </div>
           
          
            
        </div>
    </div>

  )
}

export default Home