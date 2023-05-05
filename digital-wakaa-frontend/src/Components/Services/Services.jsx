import React, { useContext, useEffect } from 'react'
import "./services.css"
import {
    Link,
} from "react-router-dom";
import ServiceContext from '../../Context API/ServicesContext';


const Services = () => {

  let {services} = useContext(ServiceContext)
  let {getServices} = useContext(ServiceContext)
  let {retrieveService} = useContext(ServiceContext)
  let {retrieveServiceWorks} = useContext(ServiceContext)



  useEffect(() => {
    getServices()
  }, [])

  let getId = (e, id, name) => {
    retrieveService(id, name)
    retrieveServiceWorks(id)
    console.log(id)
}
  
  return (
    <section id="services">
        <div className="container services__container">
            <div className="service__mainwrapper">
                <h2>Here’s What We Can Do For You</h2>
            </div>
            <div className="wrapper">
               {services.map((items) => {
                  return (
                    <div key={items.id} className='item__wrapper'>
                      <Link onClick={e => getId(e, items.id, items.name)}>
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