import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import DashboardNavBar from '../../Components/DashboardNavBar/DashboardNavBar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout-wrapper' style={{display:"flex"}}>
      <SideBar/>
      <div style={{width:"90%"}} >
        <DashboardNavBar/>
        <div style={{ padding:"5rem"}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout