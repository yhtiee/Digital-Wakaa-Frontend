import React, {useEffect} from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import ServiceCard from '../Components/ServiceCard/ServiceCard'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav/>
      <ServiceCard/>
      <Details/>
      <Testimonials/>
      <EmailSubscribe/>
      <Footer/>
    </>
  )
}

export default ServicesPage