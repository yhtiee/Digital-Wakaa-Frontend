import React , {useEffect} from 'react'
import Nav from '../Components/NavBar/Nav'
import Details from '../Components/ServicesDetails/Details'
import Services from '../Components/Services/Services'
import EmailSubscribe from '../Components/EmailSubscribe/EmailSubscribe'
import Footer from '../Components/Footer/Footer'
import { BlogCards } from '../Components/Blog/BlogCards'
import WhyDigitalWaka from '../Components/WhyDigitalWakaa/WhyDigitalWaka'
import Testimonials from '../Components/Testimonials/Testimonials'

const BlogsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav/>
      <BlogCards/>
      <Services/>
      <Details/>
      {/* <WhyDigitalWaka/> */}
      <Testimonials/>
      <EmailSubscribe/>
      <Footer/>
    </>
  )
}

export default BlogsPage