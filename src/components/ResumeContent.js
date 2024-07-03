import "./ResumeContentStyles.css"
import React from 'react'

const ResumeContent = () => {
  return (
    <div className="Resume_button">
        <a href={require("../assets/Gaurav_Kasture_Resume.pdf")} className="btn" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>
    
  )
}

export default ResumeContent