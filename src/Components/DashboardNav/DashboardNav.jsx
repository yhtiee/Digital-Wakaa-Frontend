import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import "./dashboardNavbar.css"
import { Link } from 'react-router-dom'

const DashboardNav = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <div className='dashboard-nav'>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}> 
            <GiHamburgerMenu id='menu-btn'/>
        </button>
        <div className="dashboard-links">
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        </div>
    </div>
  )
}

export default DashboardNav