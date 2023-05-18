import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import DashboardNavBar from '../../Components/DashboardNavbar/DashboardNavBar'
import "./dashboard.css"
import DashboardCards from '../../Components/DashbordCards/DashboardCards'
import Orders from '../../Components/Orders/Orders'

const OrdersPage = () => {
  return (
    <div className='dashboard'>
        <SideBar/>
        <div className="dashbord__wrapper">
            <DashboardNavBar/>
            <Orders/>
        </div>
    </div>
  )
}

export default OrdersPage