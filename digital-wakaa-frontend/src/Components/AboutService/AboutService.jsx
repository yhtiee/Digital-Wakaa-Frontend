import React, { useContext } from 'react'
import "./aboutService.css"
import ServiceContext from '../../Context API/ServicesContext'

const AboutService = () => {
  let {works} = useContext(ServiceContext)
  let {service} = useContext(ServiceContext)

  return (
    <section id='about__service'>
      <div className="container about__service">
        {service.map((items) => {
          return(
            <h2 key={items.id}> HOW {items.name} SERVICE WORKS </h2>
          )
        })}
        <div className="about__wrapper">
          {works.map((items) => {
            return(
              <div key={items.id}>
                <h4>{items.Works}</h4>
                <p>{items.WorksDescription}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutService