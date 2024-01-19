import "./HeroimgStyle.css"
import React from 'react'
import IntroImg from "../assets/self_photo.jpeg"
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
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimag