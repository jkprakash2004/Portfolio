import React, { useState } from 'react'
import './contact.css'
import emailjs from "@emailjs/browser"

const Contact = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [message,setMessage]=useState('')

const sendEmail = (e) => {
  e.preventDefault()
  const serviceID='service_09lb06g'
  const templateId='template_z4lvnhu'
  const publicId='dYWJYE5i9wZREyEVG'
  const templateParams={
    from_name:name,
    from_email:email,
    to_name:"prakash",
    message:message
  }
  
  emailjs.send(serviceID,templateId,templateParams,publicId).then((response)=>{
    console.log("Email send successfully",response);
    setEmail("")
    setMessage("")
    setName("")
  }).catch((error)=>{
    console.log(error);
  })
  };

  return (
    <div className='Contact' id='Contact'>
        <div className='contact-me'>
            <div className='left'>
                <h1>Get in Touch</h1>
                <h1 className='nth'>Contact me</h1>
            </div>
            <div className='right'>
               <form >  <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name...'  className='width'/>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email..' className='width'/>
                <textarea placeholder='Message...' name='message' className='h1' value={message} onChange={(e)=>setMessage(e.target.value)}>    
                </textarea>
                <button className='inputsend' onClick={(e)=>sendEmail(e)}> Send me</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact