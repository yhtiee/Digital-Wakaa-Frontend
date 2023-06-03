import React, {useState, useEffect} from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import About from '../Components/About/About'
import Facts from '../Components/Facts/Facts'
import Team from '../Components/Team/Team'
import WhyDigitalWaka from '../Components/WhyDigitalWakaa/WhyDigitalWaka'
import AboutUsDescription from '../Components/AboutUsDescription/AboutUsDescription'

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav/>
      <About/>
        <div className="pageComponent">
          <AboutUsDescription/>
          <Details/>
          <Testimonials/>
        </div>
      <Footer/>
    </>
  )
}

export default AboutPage