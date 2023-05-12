import React from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import AccessService from '../Components/AccessService/AccessService'
import AboutService from '../Components/AboutService/AboutService'
import MiniService from '../Components/MiniService/MiniService'
import AccessMiniService from '../Components/AccessMiniService/AccessMiniService'
import YouTubeplans from '../Components/Plans/YouTubeplans'
import YoutubeScriptDescription from '../Components/MiniServiceDescripion/YoutubeScriptDescription'

const YouTubeScript = () => {
  return (
    <>
     <Nav/>
     <AccessMiniService/>
    <YoutubeScriptDescription/>
     <YouTubeplans/>
     {/* <AboutService/> */}
     <Details/>
     <Testimonials/>
     <EmailSubscribe/>
     <Footer/>
    </>
  )
}

export default YouTubeScript