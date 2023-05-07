import React from 'react'
import DashboardNavBar from '../../Components/DashboardNavbar/DashboardNavBar'
import SideBar from '../../Components/SideBar/SideBar'
import "./layout.css"

const Layout = () => {
  return (
    <div id='layout'>
      <SideBar/>
      <DashboardNavBar/>
    </div>
  )
}

export default Layout