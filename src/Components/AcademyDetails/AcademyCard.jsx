import React from 'react'
import IMG1 from "../../assets/1green.png"
import IMG2 from "../../assets/2green.png"
import IMG3 from "../../assets/3green.png"
import IMG4 from "../../assets/4green.png"
import "./academy.css"

const AcademyCard = () => {
  return (
    <section id='academy'>
      <div className="container academy__container">
            <h2>Digital Wakaa Academy </h2>
            <p>Register in our Academy and acquire top knowledge in the Industry</p>
            <div className="academy__wrapper">
                <div className="academy">
                  <img src={IMG1} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div>
                <div className="academy">
                  <img src={IMG2} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div>
                <div className="academy">
                  <img src={IMG3} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div>
                <div className="academy">
                  <img src={IMG4} alt=""/>
                  <h4>Top Level Product</h4>
                  <p>Our products are top level with high success rate</p>
                </div> 
              </div>
        </div>
    </section>
  )
}

export default AcademyCard