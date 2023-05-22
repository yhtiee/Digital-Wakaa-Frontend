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
import Socialmediaplans from '../Components/Plans/Socialmediaplans'
import SocialMediaDescription from '../Components/MiniServiceDescripion/SocialMediaDescription'
import "./pages.css"

const Socialmedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Nav/>
    <div className="pageComponent">
    <AccessMiniService/>
    <Socialmediaplans/>
    <SocialMediaDescription/>
    <Details/>
    <Testimonials/>
    </div>
    <Footer/>
    </>
  )
}

export default Socialmedia