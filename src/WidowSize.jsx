import React from 'react'
import { useState,useEffect } from 'react'
const WidowSize = () => {
    const [windowSiz,setWindowSiz]=useState({width:undefined,height:undefined})
    
    useEffect(()=>{
        const handlerezi=()=>{
        setWindowSiz({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    handlerezi()
    window.addEventListener("resize",handlerezi)

    return()=>window.removeEventListener("resize",handlerezi)

        
    },[])

  return windowSiz
}

export default WidowSize