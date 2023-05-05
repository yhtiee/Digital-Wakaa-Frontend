import React from 'react'
import "./about.css"
import CE from "../../assets/seo2.jpeg"

const About = () => {
  return (
    <section id='about__digital__wakaa'>
      <div className="container about__container">
          <div className="about__header__left">
              <h3>About Us</h3>
              <p>Digital Wakaa was founded in 2012 and has become one of the worlds largest providers of outsourced Link Building, SEO Services, Content Creation and Design and Video services. We work on link building and content marketing campaigns for more than 5,000 agencies all over the world. <br/>
              We have an exemplary record for delivering services on time and we pride ourselves in offering unrivalled customer support with a consistent record of answering more than 90% of customer emails within a few hours. <br />
              </p>
          </div>
          <div className="about__header__right">
              <img src={CE} alt="" />
          </div>
      </div>
    </section>
  )
}

export default About