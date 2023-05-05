import React, {useEffect} from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Testimonials from '../Components/Testimonials/Testimonials'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import PaymentForn from '../Components/PaymentForm/PaymentForm'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const PaymentPage = () => {

  const stripePromise = loadStripe('pk_test_51MpHv9AqvujLwHfeu0Xq0KJEOgTtcE3YmI9AvSnbt1EySQDmKTKdPTAYGTp4YdwU9McIcw0e96Lg9xfF6BV63IXU00hjexiEJR');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Nav/>
        <Elements stripe={stripePromise}>
            <PaymentForn/>
        </Elements>
        <Details/>
        <Testimonials/>
        <EmailSubscribe/>
        <Footer/>
    </>
  )
}

export default PaymentPage