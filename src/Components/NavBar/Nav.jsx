import React from 'react'
import {
    Link,
  } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import "./nav.css"
import { useState } from 'react'
import { useContext, useEffect } from 'react';
import BlogContext from '../../Context API/BlogContext';
import ServiceContext from '../../Context API/ServicesContext';
import AuthContext from '../../Context API/AuthContext';

const Nav = () => {
  
  const [isLinkOptions, setLinkOptions] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("home/")
  // const [user, setActiveUser] = useState(false)
  let {user} = useContext(AuthContext)
  let {services} = useContext(ServiceContext)
  let {miniService} = useContext(ServiceContext)
  let {getMiniServices} = useContext(ServiceContext)
  let {getServices} = useContext(ServiceContext)
  let {getBlogList} = useContext(BlogContext)
  let {retrieveService} = useContext(ServiceContext)
  let {retrieveServiceWorks} = useContext(ServiceContext)
  let {retrieveSpecificMiniServices} = useContext(ServiceContext)
  let {retrieveSpecificMiniService} = useContext(ServiceContext)

  const openToogle = ()=>{
    setNavbarOpen(prev => !prev)
  }

  const handleFunctionServices = () => {
    setNavbarOpen(false)
    setActiveNav("/services")
  }

  const handleFunctionAbout = () => {
    setNavbarOpen(false)
    setActiveNav("/about")
  }

  const handleFunctionContact = () => {
    setNavbarOpen(false)
    setActiveNav("contact/")
  }

  const handleFunctionAcademy = () => {
    setNavbarOpen(false)
    setActiveNav("academy/")
  }

  const handleFunctionBlog = () => {
    setNavbarOpen(false)
    setActiveNav("/blog")
    getBlogList()
  }

  const handleFunctionSignup = () => {
    setNavbarOpen(false)
    setActiveNav("/signup")
  }

  const handleFunctionLogin = () => {
    setNavbarOpen(false)
    setActiveNav("login/")
  }

  const handleFunctionLogout = () => {
    setNavbarOpen(false)
  }

  const handleFunctionHome = () => {
    setActiveNav("/")
  }

  const handleFunction = () => {
    setNavbarOpen(false)
  }

  useEffect(() => {
    getServices()
    getMiniServices()
    console.log(miniService)
  }, [])

  let getId = (e, id, name) => {
    retrieveService(id, name)        
    localStorage.setItem("serviceID", JSON.stringify(id))
    localStorage.setItem("serviceName", JSON.stringify(name))
    retrieveServiceWorks(id)
    retrieveSpecificMiniServices(id)
    setLinkOptions(false)
  }

  let getIdMiniService = (e, id, name) => {
    retrieveSpecificMiniService(id, name)
    localStorage.setItem("MiniServiceID", JSON.stringify(id))
    localStorage.setItem("MiniServiceName", JSON.stringify(name))
    setLinkOptions(false)
  }


  return (
    <nav>
      <div className="container nav__container">

        <Link to='/' className='nav__logo' onClick={handleFunctionHome} >
            <h2 className='logo1'>DIGITAL</h2>
            <h2 className='logo2'>WAKAA</h2>
        </Link>
        
        <ul className={`nav__menu ${navbarOpen ? " show__menu" : ""}`} >
            <li className='nav__links' onMouseEnter={()=>setLinkOptions(true)}   onMouseLeave={()=>setLinkOptions(false)} ><Link to="/services" id='services__link'  onClick={handleFunctionServices} className={activeNav === "/services" ? "active": " "}>SERVICES</Link>
            {
            isLinkOptions === true &&
            <div  className='services__link'>
              {services.map((items, index) => {
                return (
                  <div key={items.id}>
                    <Link onClick={e => getId(e, items.id, items.name)}>{items.name}</Link>
                    {miniService.map((service) => {
                      {
                        if (service.service == index + 1){
                          return (
                            <div className='mini_services'  key={service.id}>
                              <Link onClick={e => getIdMiniService(e, service.id, service.name)}>
                              {service.name}
                              </Link>
                            </div>
                          )
                        }
                      }
                    })}
                  </div>
                )
              })}
            </div>
            }
            </li>
            <li className='nav__links'><Link to="/about"  onClick={handleFunctionAbout} className={activeNav === "/about" ? "active": " "}>ABOUT</Link></li>
            {/* <li className='nav__links'><Link to="academy/"  onClick={handleFunctionAcademy} className={activeNav ==="academy/" ? "active": ""}>ACADEMY</Link></li> */}
            <li className='nav__links'><Link to="/blog"  onClick={handleFunctionBlog} className={activeNav ==="/blog" ? "active": ""}>BLOG</Link></li>

            {user? (<>
            <li><Link to="/dashboard" className="btn btn-primary" onClick={handleFunction}>DASHBORAD</Link></li> </>) : (<><li className='nav__links' id={activeNav ==="/signup" ? "active" : ""}><Link to="/signup"  onClick={handleFunctionSignup}
            >SIGNUP</Link></li>
            <li className='nav__links'><Link to="/login"  onClick={handleFunctionLogin} className={activeNav ==="/login" ? "active": " "}>LOGIN</Link></li></>)}
        </ul>

        <button onClick={openToogle}> {navbarOpen? <AiOutlineClose id='close-menu-btn'/> : <GiHamburgerMenu id='open-menu-btn' /> }</button>
        
      </div>
    
    </nav>
  )
}

export default Nav