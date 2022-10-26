import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import {Facebook,Instagram,LinkedIn}from "@mui/icons-material"
import "./Contact.css"
const Contact = () => {
  return (
<Element className="contact" id="contact">
    <h1>Contact</h1> 
    <div className='contact_container'>
        <p>
            Email : <span>surendharkumar848@gmail.com</span>
        </p>
        <p>
            Phone Number : <span>9080315054</span>
        </p>
        <div className='contact__icons'>
            <a href='www.google.com'>
                <IconButton><Facebook/></IconButton>
            </a>
            <a href='www.google.com'>
                <IconButton><Instagram/></IconButton>
            </a>
            <a href='www.google.com'>
                <IconButton><LinkedIn/></IconButton>
            </a>
        </div>

    </div>

</Element>

  )
}

export default Contact