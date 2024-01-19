import "./FooterStyles.css"
import {Link} from "react-router-dom"
import React from 'react'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <p>
                    plot 156 ashwamedh nagar near R.T.O office, Nashik
                    </p>
                            
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                +91 8446275727</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    kasturegaurav07@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Socially Active</h4>
                <p></p>
                <div className="social">
                    <div className="email">
                    <Link to="https://www.instagram.com"><FaInstagram size={30}style={{color:"#fff",marginRight:"3rem"}}/></Link>
                    <Link to="https://www.linkedin.com/in/gaurav-kasture-3a9504268/"><FaLinkedin size={30}style={{color:"#fff",marginRight:"3rem"}}/></Link>
                    <Link to="https://github.com/GauravKasture07"><FaGithub size={30}style={{color:"#fff",marginRight:"3rem"}}/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer