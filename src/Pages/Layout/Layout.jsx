import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import DashboardNav from '../../Components/DashboardNav/DashboardNav'

const Layout = () => {
  return (
    <div className='layout-wrapper' style={{display:"flex"}}>
      <SideBar/>
      <div style={{width:"90%"}} >
        <DashboardNav/>
        <div style={{ padding:"5rem"}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout