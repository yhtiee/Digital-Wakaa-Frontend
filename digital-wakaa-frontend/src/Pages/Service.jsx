import React from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import AccessService from '../Components/AccessService/AccessService'
import PlansCard from '../Components/Plans/PlansCard'

const Service = () => {
  return (
    <>
        <Nav/>
        <AccessService/>
        <PlansCard/>
        <Details/>
        <Testimonials/>
        <EmailSubscribe/>
        <Footer/>
    </>
  )
}

export default Service