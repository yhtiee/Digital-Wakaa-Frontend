import React from 'react'
import Nav from '../Components/NavBar/Nav'
import Header from '../Components/Header/Header'
import Details from '../Components/ServicesDetails/Details'
import Services from '../Components/Services/Services'
import AccessService from '../Components/AccessService/AccessService'
import AcademyCard from '../Components/AcademyDetails/AcademyCard'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import WhyDigitalWaka from '../Components/WhyDigitalWakaa/WhyDigitalWaka'

const HomePage = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <Details/>
      <Services/>
      <WhyDigitalWaka/>
      <AcademyCard/>
      <Testimonials/>
      <EmailSubscribe/>
      <Footer/>
    </>
  )
}

export default HomePage