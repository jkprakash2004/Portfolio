import React, { useEffect, useState } from "react"
import "./Mnav.css"
import { Link } from "react-scroll"
import WidowSize from "../../WidowSize"
const Navbar = () => {
    const {width}=WidowSize()
    const li=["Home","Education","Skills","Exprieance","Projects"]
    const [id,setId]=useState()
    const hanleClick=(ids)=>{
        setId(ids)
    }
    console.log(width);
  return (
    <div className={`navbar ${width<=469?"mobile":"navbar"}`}>
        <div className='navbar-container'>
            <div className='logo'>Prakash</div>
            
                <div className={`nav ${width<=469?"mobile-nav":"nav"}`}>
                <ul>
                {li.map((e,index)=>{
                    return(
                <li className={`li ${index==id?"cl":"ci"}`} key={index}><Link onClick={()=>hanleClick(index)} spy={true} to={e} smooth={true} activeClass='activeClass'>{e}</Link></li>
                    )
                })}
                    <button><Link spy={true} to='Contact' smooth={true} >Contact</Link></button>        
                </ul>
        </div>
            
            
        </div>
    </div>
            )
            }

export default Navbar