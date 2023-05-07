import React, {useEffect} from 'react'
import MiniService from '../Components/MiniService/MiniService'
import PlansCard from '../Components/Plans/PlansCard'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import AccessMiniService from '../Components/AccessMiniService/AccessMiniService'


const MiniServicePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Nav/>
        <AccessMiniService/>
        <PlansCard/>
        <Details/>
        <Testimonials/>
        <EmailSubscribe/>
        <Footer/>
    </>
  )
}

export default MiniServicePage