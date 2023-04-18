import React from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import SignupForm from '../Components/Signup/SignupForm'
import LoginForm from '../Components/Login/LoginForm'
import Services from '../Components/Services/Services'

const LoginPage = () => {
  return (
    <>
        <Nav/>
        <LoginForm/>
        <Services/>
        <Details/>
        <Testimonials/>
        <EmailSubscribe/>
        <Footer/>
    </>
  )
}

export default LoginPage