import React from 'react'
import IMG1 from "../../assets/1green.png"
import IMG2 from "../../assets/2green.png"
import IMG3 from "../../assets/3green.png"
import IMG4 from "../../assets/4green.png"
import "./facts.css"

const  Facts = () => {
  return (
    <section id='facts'>
      <div className="container academy__container">
            <h2>Facts</h2>
            <p>Facts About Digital Wakaa</p>
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

export default Facts