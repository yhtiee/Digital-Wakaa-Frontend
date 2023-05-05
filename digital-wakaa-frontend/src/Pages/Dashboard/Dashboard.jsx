import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import DashboardNavBar from '../../Components/DashboardNavbar/DashboardNavBar'
import "./dashboard.css"
import DashboardCards from '../../Components/DashbordCards/DashboardCards'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <SideBar/>
        <div className="dashbord__wrapper">
            <DashboardNavBar/>
            <DashboardCards/>
        </div>
    </div>
  )
}

export default Dashboard