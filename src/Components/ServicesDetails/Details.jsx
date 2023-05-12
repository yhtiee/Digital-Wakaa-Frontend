import React from 'react'
import "./details.css"
import CS from '../../assets/customer-support.png'
import SD from '../../assets/ecommerce.png'
import ET from '../../assets/people.png'
import RG from '../../assets/refund.png'


const Details = () => {
  return (
    <section id='details'> 
        <div className='container details__container'>
            <h2>We Don't Mean To Brag But</h2>
            <div className="details__wrapper">
                <div className='detail'>
                    <div className="detail__top">
                        <img src={SD} alt="" className='delivery'/>
                    </div>
                    <div className="detail__bottom">
                        <h4>We Deliver With Speed </h4>
                        <p>
                        We prioritse working quickly and efficiently to deliver results that exceed your expectations. 
                        </p>
                    </div>
                </div>
                <div className='detail'>
                    <div className="detail__top">
                        <img src={ET} alt="" className='team' />
                    </div>
                    <div className="detail__bottom">
                        <h4>Our Team Is Experienced </h4>
                        <p>
                        Our digital marketing experts have over 5 years of experience in the industry.
                        </p>
                    </div>
                </div>
                <div className='detail'>
                    <div className="detail__top">
                        <img src={CS} alt="" className='support'/>
                    </div>
                    <div className="detail__bottom">
                        <h4>24/7 Quick Response</h4>
                        <p>
                        When working with us, expect a prompt and efficient response to any questions or concerns, 24/7.
                        </p>
                    </div>
                </div>
                <div className='detail'>
                    <div className="detail__top">
                        <img src={RG} alt="" className='refund' />
                    </div>
                    <div className="detail__bottom">
                        <h4>100% Refund Guarantee</h4>
                        <p>
                        If you're not satisfied with our services, we'll issue a full refund, no questions asked.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details