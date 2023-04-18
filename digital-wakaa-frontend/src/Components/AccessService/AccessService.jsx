import React, {useContext} from 'react'
import "./accessService.css"

const AccessService = () => {
  let service = JSON.parse(localStorage.getItem("service"))

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