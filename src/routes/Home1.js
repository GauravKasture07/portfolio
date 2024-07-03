import React from 'react'
import Navbar from '../components/Navbar'
import Heroimag from '../components/Heroimag'
import Footer from '../components/Footer'
import Work from "../components/Work"
import AboutContent from "../components/AboutContent"
const Home1 = () => {
  return (
    <div>
      <Navbar/>
      <Heroimag />
      <AboutContent/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home1