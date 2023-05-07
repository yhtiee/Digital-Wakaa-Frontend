import React, {useEffect, useContext} from 'react'
import "./miniservice.css"
import ServiceContext from '../../Context API/ServicesContext';
import { Link } from 'react-router-dom';

const MiniService = () => {
    let {miniServices} = useContext(ServiceContext)
    let {service} = useContext(ServiceContext)
    let {retrieveSpecificMiniService} = useContext(ServiceContext)

    let getId = (e, id, name) => {
        retrieveSpecificMiniService(id, name)
    }
  return (
    <section id='mini__service'>
        <div className="container mini__service__container">
            {service.map((items) => {
            return(
                <h2 key={items.id}> OUR {items.name} SERVICES </h2>
            )
            })}
            <div className="mini__service__wrapper">
                {miniServices.map((items) => {
                    return(
                        <Link key={items.id} className='mini_service' onClick={e => getId(e, items.id, items.name)}>         
                            <h4>{items.name}</h4>
                            <p>{items.description}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default MiniService