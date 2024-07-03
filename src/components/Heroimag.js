import "./HeroimgStyle.css"
import React from 'react'
import IntroImg from "../assets/portfolio_bg.jpg"
import { Link } from "react-router-dom"
const Heroimag = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into_img" src={IntroImg} alt="intro"/>
        </div>
        <div class="content">
          <p><b>Hello,I'm a Gaurav Kasture</b></p>
            <h1>Computer Engineering Student</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <a href={require("../assets/Gaurav_Kasture_Resume.pdf")} className="btn-light" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Heroimag