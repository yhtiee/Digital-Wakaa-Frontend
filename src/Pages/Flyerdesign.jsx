import React, {useEffect} from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import AccessService from '../Components/AccessService/AccessService'
import AboutService from '../Components/AboutService/AboutService'
import MiniService from '../Components/MiniService/MiniService'
import AccessMiniService from '../Components/AccessMiniService/AccessMiniService'
import Flyerdesignplans from '../Components/Plans/Flyerdesignplans'
import FlyerDesignDescription from '../Components/MiniServiceDescripion/FlyerDesignDescription'
import "./pages.css"

const Flyerdesign = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Nav/>
    <div className="pageComponent">
      <AccessMiniService/>
      <Flyerdesignplans/>
      <FlyerDesignDescription/>
      <AboutService/>
      <Details/>
      <Testimonials/>
    </div>
    <Footer/>
    </>
  )
}

export default Flyerdesign