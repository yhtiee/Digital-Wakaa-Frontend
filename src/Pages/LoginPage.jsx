import React, {useState, useEffect} from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import SignupForm from '../Components/Signup/SignupForm'
import LoginForm from '../Components/Login/LoginForm'
import Services from '../Components/Services/Services'
import "./pages.css"

const LoginPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Nav/>
        <LoginForm/>
        <Footer/>
    </>
  )
}

export default LoginPage