import React from 'react'
import "./details.css"
import CS from '../../Assets/customer-support.png'
import SD from '../../Assets/ecommerce.png'
import ET from '../../Assets/people.png'
import RG from '../../Assets/refund.png'




const Details = () => {
  return (
    <section id='details'> 
        <div className='container details__container'>
            <div className='detail'>
                <div className="detail__top">
                    <img src={SD} alt="" className='delivery'/>
                </div>
                <div className="detail__bottom">
                    <h4>Speedy Delivery</h4>
                    <p>
                        We deliver our services within the shortest turnaround time (2 to 3 days )
                    </p>
                </div>
            </div>
            <div className='detail'>
                <div className="detail__top">
                    <img src={ET} alt="" className='team' />
                </div>
                <div className="detail__bottom">
                    <h4>Experienced Team</h4>
                    <p>
                        We offer more than 8 years of global branding experience.
                    </p>
                </div>
            </div>
            <div className='detail'>
                <div className="detail__top">
                    <img src={CS} alt="" className='support'/>
                </div>
                <div className="detail__bottom">
                    <h4>24/7 Customer Support</h4>
                    <p>
                        Our sales team offers all round the clock customer support to prospects and clients
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
                        In case you’re not satisfied with our creativity, we will return the payment.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details