import React, { useContext, useEffect } from 'react'
import "./services.css"
import {
    Link,
} from "react-router-dom";
import ServiceContext from '../../Context API/ServicesContext';


const Services = () => {

  let {services} = useContext(ServiceContext)
  let {getServices} = useContext(ServiceContext)

  useEffect(() => {
    getServices()
  }, [])
  
  return (
    <section id="services">
        <div className="container services__container">
            <div className="service__mainwrapper">
                <h2>Explore Our On Demand Services</h2>
                <p>Our Top Services that Help Clients Levearge thier Business</p>
            </div>
            <div className="wrapper">
               {services.map((items) => {
                  return (
                    <div key={items.id} className='item__wrapper'>
                      <Link>
                        <h5 className='service__name'>{items.name}</h5>
                        <img src={items.image} alt="" className='service__image' />
                      </Link>
                    </div>
                  )
               })}
            </div>
        </div>
    </section>
  )
}

export default Services