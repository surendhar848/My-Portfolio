import React from 'react'
import {Link} from "react-scroll"
import "./Topcontent.css"
const Topcontent = () => {
  return (
    <div className="topcontent">
        <div className="topcontent_container">
            <h1> D.SURENDHAR KUMAR </h1>
            <p>
                Website developer  
            </p>
            <a href='www.google.com'>
                <button className='topcontent__button'> Download Cv</button>
            </a>
                <Link to ="projects" smooth={true} duration={500}>
                    <button className='topcontent__button'> My Work</button>

                
            </Link>
        </div>
    </div>
  )
}

export default Topcontent