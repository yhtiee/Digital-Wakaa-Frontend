import React from 'react'
import "./footer.css"
import IMG1 from "../../assets/facebook.png"
import IMG2 from "../../assets/insta.png"
import IMG3 from "../../assets/twitter.png"
import IMG4 from "../../assets/linkedin.png"

const Footer = () => {
  return (
    <section id='footer'>
        <div className="container footer__container">
            <div className="footer__top">
                <div className="services">
                    <h5 className="headings">Services</h5>
                    <ul>
                        <li><a href="">Link Building</a></li>
                        <li><a href="">SEO</a></li>
                        <li><a href="">Content Writing</a></li>
                        <li><a href="">Design and Video</a></li>
                    </ul>
                </div>
                <div className="company">
                    <h5 className="headings">Company</h5>
                    <ul>
                        <li><a href="">Review</a></li>
                        <li><a href="">Who We Are</a></li>
                        <li><a href="">Why Choose Us</a></li>
                        <li><a href="">Meet The Team</a></li>
                        <li><a href="">Our History</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Affilates</a></li>
                    </ul>
                </div>
                <div className="resources">
                    <h5 className="headings">Resources</h5>
                    <ul>
                        <li><a href="">Our Blog</a></li>
                        <li><a href="">SEO Swag</a></li>
                        <li><a href="">Keyword Rank Checker</a></li>
                        <li><a href="">Blog Title Generator</a></li>
                        <li><a href="">How to Use Our Services</a></li>
                    </ul>
                </div>
                <div className="contact__us">
                    <h5 className="headings">Contatc Us</h5>
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
                        <p>Checkout Our <a href="">Privacy and Cookie Policies</a> and <a href="">Terms</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer