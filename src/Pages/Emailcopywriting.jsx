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
import Emailcopywritingplans from '../Components/Plans/Emailcopywritingplans'
import "./pages.css"

const Emailcopywriting = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Nav/>
    <div className='pageComponnet'>
      <AccessMiniService/>
      <Emailcopywritingplans/>
      <AboutService/>
      <Details/>
      <Testimonials/>
    </div>
    <Footer/>
    </>
  )
}

export default Emailcopywriting