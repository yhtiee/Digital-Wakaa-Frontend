import React, {useEffect} from 'react'
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
import "./pages.css"

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{display:"flex", flexDirection:"column", }}>
      <Nav/>
      <Header/>
      <div className="pageComponent">
        <Services/>
        <Details/>
        <Testimonials/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage