import React from 'react';
import './skill.css';
import {motion} from "framer-motion"
const Skills = () => {
    const fullstack=[{
        course:"html",
        img:"/img/html.png"
       },
       {
        course:"html",
        img:"/img/css.png"
       },
       {
        
        course:"React js",
        img:"/img/javascript.png"
       },
       {
        course:"html",
        img:"/img/nodejs.png"
       },
       {
        course:"nodejs",
        img:"/img/mysql.png"
       },
       {
        course:"json",
        img:"/img/3d-file-json-format-icon-png.png"
       },
       
       {
        course:"html",
        img:"/img/mongo-db.png"
       },
       {
        
        course:"json",
        img:"/img/python.jpg"
       },
    ]
  return (
    <div className='service' id='Skills'>
        <div className=' container'>
            <div className='left-side'>
            <div className='skils'><h1>My Skills </h1></div>
              <hr/> 
            </div>
            <div className='right-side'>
            <div className='box'>
            
                {fullstack.map((e,index)=>{
                    return(
                        <motion.div 
                        initial={{transform:"scale(0.4)"}}
                        whileInView={{transform:"scale(1)"}}
                        transition={{type:"spring",duration:index}}
                        className='round' key={index}>
                            <span className='emoj'><img src={e.img} alt=''/></span>
                            
                            
                            
                        </motion.div>
                    )
                })}
            
           
            
            
        </div>
            
        
            </div>
        </div>
    </div>
  )
}

export default Skills