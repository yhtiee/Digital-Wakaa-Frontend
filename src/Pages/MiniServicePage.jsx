import React, {useEffect} from 'react'
import MiniService from '../Components/MiniService/MiniService'
import PlansCard from '../Components/Plans/PlansCard'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import AccessMiniService from '../Components/AccessMiniService/AccessMiniService'
import "./pages.css"

const MiniServicePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
        <Nav/>
        <div className="pageComponent">
          <AccessMiniService/>
          <LocalSEOplans/>
          <LocalSEODescriptions/>
          <Details/>
          <Testimonials/>
        </div>
        <Footer/>
    </>
  )
}

export default MiniServicePage