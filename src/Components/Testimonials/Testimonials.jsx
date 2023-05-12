import React from 'react'
import "./testimonials.css"
import IMG1 from "../../assets/client1.jpg"


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="container testimonial__container">
        <div className="testimonials">
          <h2 className='testimonal__heading'> Don't Just Take Our Word For It, Here’s Proof </h2>
        </div>
        <div className="testimonial__wrapper">
            <div className="testimonial">
              <div className='image__wrapper'>
                <img src={IMG1} alt="" />
              </div>
              <h4>DR. Ekpenyong Utibeabasi</h4>
              <p>" Group of deligent and competent team that delivers on the go "</p>
            </div>
            <div className="testimonial">
              <div className='image__wrapper'>
                <img src={IMG1} alt="" />
              </div>
              <h4>DR. Ekpenyong Utibeabasi</h4>
              <p>" Group of deligent and competent team that delivers on the go "</p>
            </div>
            <div className="testimonial">
              <div className='image__wrapper'>
                <img src={IMG1} alt="" />
              </div>
              <h4>DR. Ekpenyong Utibeabasi</h4>
              <p>" Group of deligent and competent team that delivers on the go "</p>
            </div>
            <div className="testimonial">
              <div className='image__wrapper'>
                <img src={IMG1} alt="" />
              </div>
              <h4>DR. Ekpenyong Utibeabasi</h4>
              <p>" Group of deligent and competent team that delivers on the go "</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials