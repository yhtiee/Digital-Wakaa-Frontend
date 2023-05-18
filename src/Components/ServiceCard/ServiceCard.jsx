import React, {useContext, useEffect} from 'react'
import "./servicecard.css"
import ServiceContext from '../../Context API/ServicesContext';

const ServiceCard = () => {
    let {services} = useContext(ServiceContext)
    let {getServices} = useContext(ServiceContext)
    let {retrieveService} = useContext(ServiceContext)
    let {retrieveServiceWorks} = useContext(ServiceContext)
    let {retrieveSpecificMiniServices} = useContext(ServiceContext)



    useEffect(() => {
        getServices()
    }, [])

    let getId = (e, id, name) => {
        retrieveService(id, name)
        localStorage.setItem("serviceID", JSON.stringify(id))
        localStorage.setItem("serviceName", JSON.stringify(name))
        retrieveServiceWorks(id)
        retrieveSpecificMiniServices(id)
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
                            <button className='btn btn-primary' onClick={e => getId(e, items.id, items.name)}>
                                Get Started
                            </button>
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