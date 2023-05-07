import React from 'react'
import "./why.css"
import IMG1 from "../../assets/1.png"
import IMG2 from "../../assets/2.png"
import IMG3 from "../../assets/3.png"
import IMG4 from "../../assets/4.png"


const WhyDigitalWaka = () => {
  return (
    <section id='why__digitalWakaa'>
        <div className="container why__digitalWakaa__container">
            <h2>Why Choose Digital Wakaa</h2>
            <p>Our Clients Stick With us Because We Provide Quality Serivces</p>
            <div className="why__wrapper">
                <div className="why">
                  <img src={IMG1} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div>
                <div className="why">
                  <img src={IMG2} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div>
                <div className="why">
                  <img src={IMG3} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div>
                <div className="why">
                  <img src={IMG4} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div>  
            </div>
        </div>
        
    </section>
  )
}

export default WhyDigitalWaka