import React, { useState } from 'react'
import "./edu.css"
import {motion} from "framer-motion"
const Edu = () => {
    const [tr,setTr]=useState(true)
    const [lis,setLis]=useState(true)
    const handleedu=()=>{
        setTr(true)
        setLis(true)
    }
    console.log(window.innerWidth);
    const handleuni=()=>{
        setTr(false)
        setLis(false)
    }
  return (
    <div className='edu' id='Education'>
        <h1>Education</h1>
        <hr/>
        <div className='edu-div'>
            <span onClick={handleedu} className={`eud ${lis && "lis"}` }>Education</span>
            <span onClick={handleuni} className={`uni ${lis || "lis"}` }>University</span>
        </div>
        <div className='body-edu'>
            {tr?(
                <div className='education'>
                <div className='line'>
                    <motion.div 
                    initial={{x:-220}}
                    whileInView={{x:0}}
                    transition={{type:"spring"}}
                    
                    className='school'>
                        
                        <span>
                        <span>
                        Govt Boys Higher Secondary School Orathandu</span><br/>
                        <span>SSLC</span><br/>
                        <span>Percentage : 70%</span><br/>
                        <span>2017 -2018</span>
                        </span>
                    </motion.div>

        <motion.div
        initial={{x:220}}
        whileInView={{x:0}}
        transition={{type:"spring"}}
        
        className='universe'>
        <span>
                        <span>
                        Govt Boys Higher Secondary School Orathanadu</span><br/>
                        <span>HSC</span><br/>
                        <span>Percentage : 78%</span><br/>
                        <span>2020 -2021</span>
                        </span>
        </motion.div>
        </div>
    </div>
            ):(<div className='_universe'>
                 <div className='line'>
                    <motion.div 
                    initial={{x:-220}}
                    whileInView={{x:0}}
                    transition={{type:"spring"}}
                    className='school'>
                        <span>
                        <span>
                        A V V M SRI PUSHPAM COLLEGE PUNDI</span><br/>
                        <span>Degree : BCA</span><br/>
                        <span>Percentage : 64%</span><br/>
                        <span>2021 -2024</span>
                        </span>
                    </motion.div>
        <motion.div
        initial={{x:220}}
        whileInView={{x:0}}
        transition={{type:"spring"}}
        className='universe'>
        {/* <span>
        <span>
                        Govt Boys Higher Secondary School</span><br/>
                        <span>SSLC</span><br/>
                        <span>Percentage : 69</span><br/>
                        <span>2017 -2018</span>
                        </span>  */}
        </motion.div>
        </div>
            </div>)}
            
        
    </div>
    </div>
  )
}

export default Edu