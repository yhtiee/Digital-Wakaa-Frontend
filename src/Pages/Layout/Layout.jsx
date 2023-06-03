import React, { useState } from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../../Components/DashboardNav/DashboardNav'
import "./layout.css"

const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='layout-wrapper' style={{display:"flex"}}>
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className={`outlet-wrapper`}>
        <DashboardNav
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />
        <div style={{ padding:"2rem"}}>
          <Outlet/>
        </div>
      </div>

    </div>
  )
}

export default Layout