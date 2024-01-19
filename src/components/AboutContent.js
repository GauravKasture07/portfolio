import "./AboutCountentStyles.css"
import {Link} from "react-router-dom"
import React from 'react'
import React1 from "../assets/portfolio_bg.jpg"
import React2 from "../assets/portfolio_bg1.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who I am?</h1>
                <p>
                <ul>
                <li>I am a Computer Engineer currently i am study in International institute of information technology, Pune.(IIIT) </li><br/>
                <li>I have interned with Sumago Infotech.</li><br/>
                <li>Technology excited me and I am always ready to learn new technology . </li><br/>
                <li>Skills that I have </li>
                <li>1.Java(With Data structure)</li>
                <li>2.HTML, CSS, JavaScript, React</li>
                <li>3.MySQL</li>
                <li>4.Application Development (Java, Kotlin, SQLite)</li>
                </ul>
                </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent