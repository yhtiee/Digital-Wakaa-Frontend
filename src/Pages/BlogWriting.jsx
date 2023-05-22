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
import Blogwritingplans from '../Components/Plans/Blogwritingplans'
import BlogWritingDescripion from '../Components/MiniServiceDescripion/BlogWritingDescripion'
import "./pages.css"

const BlogWriting = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Nav/>
    <div className='pageComponent'>
      <AccessMiniService/>
      <Blogwritingplans/>
      <BlogWritingDescripion/>
      <Details/>
      <Testimonials/>
    </div>
    <Footer/>
    </>
  )
}

export default BlogWriting