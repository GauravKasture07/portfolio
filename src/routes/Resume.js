import React from 'react'

import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResumeContent from '../components/ResumeContent'
const Resume = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="My Resume" text="Click on Resume Button to see it "/>
      <ResumeContent/>
      <Footer/>
    </div>
    
  )
}

export default Resume