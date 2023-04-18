import React, {useContext, useEffect} from 'react'
import "./servicecard.css"
import ServiceContext from '../../Context API/ServicesContext';

const ServiceCard = () => {
    let {services} = useContext(ServiceContext)
    let {getServices} = useContext(ServiceContext)
    let {retrieveService} = useContext(ServiceContext)

    useEffect(() => {
        getServices()
    }, [])

    let getId = (e, id) => {
        retrieveService(id)
        console.log(id)
    }

  return (
    <section id='service__card'>
        <div className="container service__card__container">
            <div className='service__card'>
                {services.map((items) => {
                  return (
                    <div key={items.id} className="service__card__wrapper">
                        <div className="service__card__left">
                            <img src={items.image} alt="" />
                        </div>
                        <div className="service__card___right">
                            <h2>{items.name}</h2>
                            <p>{items.description}</p>
                            <a href='/service' className='btn btn-primary' onClick={e => getId(e, items.id)}>
                                Get Started
                            </a>
                        </div>
                    </div>
                  )
               })}
                
            </div>
        </div>
    </section>
  )
}

export default ServiceCard