import React, { useContext, useEffect } from 'react'
import "./footer.css"
import IMG1 from "../../assets/facebook.png"
import IMG2 from "../../assets/insta.png"
import IMG3 from "../../assets/twitter.png"
import IMG4 from "../../assets/linkedin.png"
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe'
import ServiceContext from '../../Context API/ServicesContext';
import {
    Link,
} from "react-router-dom";


const Footer = () => {
    
  let {services} = useContext(ServiceContext)
  let {getServices} = useContext(ServiceContext)
  let {retrieveService} = useContext(ServiceContext)
  let {retrieveServiceWorks} = useContext(ServiceContext)

  useEffect(() => {
    getServices()
  }, [])

  let getId = (e, id, name) => {
    retrieveService(id, name)
    localStorage.setItem("serviceID", JSON.stringify(id))
    localStorage.setItem("serviceName", JSON.stringify(name))
    retrieveServiceWorks(id)
    console.log(id)
}


  return (
    <>
    <div id='footer'>
    <EmailSubscribe/>
        <div className="container footer__container">
            <div className="footer__top">
                <div className="services">
                    <h5 className="headings">SERVICES</h5>
                    <ul>
                        {services.map((items) => {
                        return (
                            <li key={items.id}>
                                <Link onClick={e => getId(e, items.id, items.name)}>
                                    {items.name}
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="company">
                    <h5 className="headings">COMPANY</h5>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/about">Mission</Link></li>
                        <li><Link to="/about">Vision</Link></li>
                    </ul>
                </div>
                <div className="resources">
                    <h5 className="headings">RESOURCES</h5>
                    <ul>
                        <li><Link to="/blog">Our Blog</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="contact__us">
                    <h5 className="headings">CONTACT US</h5>
                    <ul>
                        <li><a href="">Support & FAQs</a></li>
                        <li><a href="">email</a></li>
                        <li><a href="">phone number 1</a></li>
                        <li><a href="">phone number 2</a></li>
                        <li><a href="">Itam By Police Station</a></li>
                        <li><a href="">Uyo, Akwa Ibom</a></li>
                        <li><a href="">Nigeria</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="socials">
                    <a href=""><img src={IMG1} alt="" /></a>
                    <a href=""><img src={IMG2} alt="" /></a>
                    <a href=""><img src={IMG3} alt="" /></a>
                    <a href=""><img src={IMG4} alt="" /></a>                    
                </div>
                <div className="info">
                    <div className="left">
                        <p>© 2012 - 2023 DigitalWakaa. All Rights Reserved.</p>
                    </div>
                    <div className="right">
                        <p> Our <a href="">Privacy and Cookie Policies</a> and <a href="">Terms</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Footer