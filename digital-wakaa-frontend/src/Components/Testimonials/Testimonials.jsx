import React from 'react'
import "./testimonials.css"
import IMG1 from "../../assets/client1.jpg"


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="container testimonial__container">
        <div className="testimonials">
          <h2 className='testimonal__heading'>Digital Wakaa Top Clients Testimonials</h2>
          <p className='testimonial__paragraph'>See what Our Top Clients say About Digital Wakaa</p>
        </div>
        <div class="testimonial__wrapper">
            <div class="testimonial">
              <div className='image__wrapper'>
                <img src={IMG1} alt="" />
              </div>
              <h4>DR. Ekpenyong Utibeabasi</h4>
              <p>" Group of deligent and competent team that delivers on the go "</p>
            </div>
            <div class="testimonial">
              <div className='image__wrapper'>
                <img src={IMG1} alt="" />
              </div>
              <h4>DR. Ekpenyong Utibeabasi</h4>
              <p>" Group of deligent and competent team that delivers on the go "</p>
            </div>
            <div class="testimonial">
              <div className='image__wrapper'>
                <img src={IMG1} alt="" />
              </div>
              <h4>DR. Ekpenyong Utibeabasi</h4>
              <p>" Group of deligent and competent team that delivers on the go "</p>
            </div>
            <div class="testimonial">
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