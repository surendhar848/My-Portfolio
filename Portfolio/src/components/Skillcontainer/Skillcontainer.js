import React from 'react'
import skilling from "../../photos/index.jpeg"
import {Element} from "react-scroll"
import LinearProgress from "@mui/material/LinearProgress"
import "./Skillcontainer.css"

const skillcontainer = () => {
  return (
    <Element className="skillcontainer" id="skills">

        <div className="skillcontainer__image">
        <img src={skilling} alt=""/>

    </div>
    <div className='skillcontainer__test'>
      <h2>SKILLSET</h2>
    
    <div className="skillcontainer__skillset">
      <h5>React - 60%</h5>
      <div className="skillcontainer__slider skillcontainer__slider1">
        <LinearProgress variant="determinant" value={80}/>
              </div>
    </div>
    <div className="skillcontainer__skillset">
      <h5>Html - 50%</h5>
      <div className="skillcontainer__slider skillcontainer__slider2">
        <LinearProgress variant="determinant" value={60}/>
              </div>
    </div>
    <div className="skillcontainer__skillset">
      <h5>css - 40%</h5>
      <div className="skillcontainer__slider skillcontainer__slider3">
        <LinearProgress variant="determinant" value={30}/>
              </div>
    </div>
    <div className="skillcontainer__skillset">
      <h5>Python - 30%</h5>
      <div className="skillcontainer__slider skillcontainer__slider4">
        <LinearProgress variant="determinant" value={30}/>
              </div>
    </div>
    </div>

    </Element>
  )
}

export default skillcontainer