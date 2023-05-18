import React, {useContext, useEffect} from 'react'
import "./accessService.css"
import ServiceContext from '../../Context API/ServicesContext'


const AccessService = () => {

  let {service} = useContext(ServiceContext)
  let {retrieveService} = useContext(ServiceContext)
  let {retrieveSpecificMiniServices} = useContext(ServiceContext)

  let serviceID = JSON.parse(localStorage.getItem("serviceID"))
  let serviceName = JSON.parse(localStorage.getItem("serviceName"))

  useEffect(() => {
    retrieveService(serviceID, serviceName)
    retrieveSpecificMiniServices(serviceID)
  }, [])
  
  return (
    <section id='access__service'>
      <div className="container access__service__container">
            <div className='service__card'>
                {service.map((items) => {
                  return (
                    <div key={items.id} className="service__card__wrapper">
                        <div className="service__card__left">
                            <img src={items.image} alt="" />
                        </div>
                        <div className="service__card___right">
                            <h2>{items.name}</h2>
                            <p>{items.description}</p>
                        </div>
                    </div>
                  )
               })}
                
            </div>
      </div>
    </section>
  )
}

export default AccessService