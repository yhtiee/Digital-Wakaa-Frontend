import React from 'react'
import "./dashboardNavbar.css"
import { useState } from 'react'
import { useContext, useEffect } from 'react';
import BlogContext from '../../Context API/BlogContext';
import {
    Link,
  } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import AuthContext from '../../Context API/AuthContext';


const DashboardNavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [activeNav, setActiveNav] = useState("home/")
    let {user} = useContext(AuthContext)
    let {logoutUser} = useContext(AuthContext)
    let {getBlogList} = useContext(BlogContext)

    console.log(user)
  
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
      logoutUser()
    }
  
    const handleFunctionHome = () => {
      setActiveNav("/")
    }
  
    const handleFunction = () => {
      setNavbarOpen(false)
    }
  return (
    <nav>
        <div className=" nav__container">

        <ul className={`nav__menu ${navbarOpen ? " show__menu" : ""}`}>
            <li className='nav__links'><Link to="/services" onClick={handleFunctionServices} className={activeNav === "/services" ? "active": " "}>SERVICES</Link></li>
            <li className='nav__links'><a href="/about"  onClick={handleFunctionAbout} className={activeNav === "/about" ? "active": " "}>ABOUT</a></li>
            <li className='nav__links'><a href="contact/"  onClick={handleFunctionContact} className={activeNav === "contact/" ? "active": ""}>CONTACT</a></li>
            <li className='nav__links'><a href="academy/"  onClick={handleFunctionAcademy} className={activeNav ==="academy/" ? "active": ""}>ACADEMY</a></li>
            <li className='nav__links'><a href="/blog"  onClick={handleFunctionBlog} className={activeNav ==="/blog" ? "active": ""}>BLOG</a></li>

            {user? (<>
            <li><a href="" className="btn btn-primary" onClick={handleFunctionLogout}>LOGOUT</a></li></>) : (<><li className='nav__links' id={activeNav ==="/signup" ? "active" : ""}><Link to="/signup"  onClick={handleFunctionSignup}
            >SIGNUP</Link></li>
            <li className='nav__links'><a href="/login"  onClick={handleFunctionLogin} className={activeNav ==="/login" ? "active": " "}>LOGIN</a></li></>)}
        </ul>

        <button onClick={openToogle}> {navbarOpen? <AiOutlineClose id='close-menu-btn'/> : <GiHamburgerMenu id='open-menu-btn' /> }</button>
        </div>
    </nav>
  )
}

export default DashboardNavBar