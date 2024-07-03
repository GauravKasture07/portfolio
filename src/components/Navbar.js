import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom"
import React, { useState } from "react"
const Navbar = () => {
  const[click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
  const [color,setColor]=useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor);
  const h1Styles = {
    fontFamily: 'YourDesignerFont', // Replace 'YourDesignerFont' with the desired font-family
    letterSpacing: '5px', // Adjust the letter-spacing to your preference
    textTransform: 'uppercase', // Convert text to uppercase for a consistent look
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
    // Add any additional styles as needed
  };
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1 style={h1Styles}>Gaurav</h1>
        </Link>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/project">Project</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color:"3fff"}}/>): ( <FaBars size={20} style={{color:"3fff"}}/>)}
      
      
    </div>
    </div>
  )
}

export default Navbar