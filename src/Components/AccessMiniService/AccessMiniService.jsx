import React, {useContext, useEffect} from 'react'
import "./accessMiniService.css"
import ServiceContext from '../../Context API/ServicesContext'


const AccessMiniService = () => {

  let {retrievedMiniService} = useContext(ServiceContext)
  let {retrieveSpecificMiniService} = useContext(ServiceContext)

  let MiniServiceID = JSON.parse(localStorage.getItem("MiniServiceID"))
  let MiniServiceName = JSON.parse(localStorage.getItem("MiniServiceName"))

  useEffect(() => {
    retrieveSpecificMiniService(MiniServiceID, MiniServiceName)
  }, [])
  
  return (
    <section id='access__service'>
      <div className="container access__service__container">
            <div className='service__card'>
                {retrievedMiniService.map((items) => {
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

export default AccessMiniService