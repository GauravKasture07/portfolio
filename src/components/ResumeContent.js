import { NavLink } from "react-router-dom"
import "./ResumeContentStyles.css"
import React from 'react'

const ResumeContent = () => {
  return (
    <div className="Resume_button">
        <NavLink to={"https://github.com/GauravKasture07/Resume/blob/main/Gaurav_Kasture_Resume.pdf"} className="btn">Resume</NavLink>
    </div>
    
  )
}

export default ResumeContent