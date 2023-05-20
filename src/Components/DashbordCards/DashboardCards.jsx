import React, { useContext, useEffect } from 'react'
import {MdPendingActions} from "react-icons/md"
import {IoTicket} from "react-icons/io5"
import { GiShoppingCart } from 'react-icons/gi';
import {GiCancel} from "react-icons/gi"
import "./dashboardCards.css"
import OrderContext from '../../Context API/OrdersContext';

const DashboardCards = () => {

  let {pendingOrders} = useContext(OrderContext)
  let {totalOrders} = useContext(OrderContext)
  let {completedOrders} = useContext(OrderContext)
  let {cancelledOrders} = useContext(OrderContext)

  let {getPendingOrders} = useContext(OrderContext)
  let {getTotalOrders} = useContext(OrderContext)
  let {getCompletedOrders} = useContext(OrderContext)
  let {getCancelledOrders} = useContext(OrderContext)




  useEffect(() => {
    getCancelledOrders()
    getCompletedOrders()
    getPendingOrders()
    getTotalOrders()
  }, [])
  
  return (
    
    <div className="dashboardcard__wrapper">
      <h2>Dashboard</h2>
      <div className="card_container">
        <div className="card">
          <div className="card_left">
              <GiShoppingCart className='icon_green'/>
          </div>
          <div className="card_right_total">
            <h4>Total Orders</h4>
            <h1>{totalOrders}</h1>
          </div>
        </div>
        <div className="card">
          <div className="card_left">
              <IoTicket className='icon'/>
          </div>
          <div className="card_right_pending">
            <h4>Completed Orders</h4>
            <h1>{completedOrders}</h1>
          </div>
        </div>
        <div className="card">
          <div className="card_left">
            <MdPendingActions className='icon'/>
          </div>
          <div className="card_right_pending">
            <h4>Pending Orders</h4>
            <h1>{pendingOrders}</h1>
          </div>
        </div>
        <div className="card">
          <div className="card_left">
              <GiCancel className='icon_green'/>
          </div>
          <div className="card_right_total">
            <h4>Cancelled Orders</h4>
            <h1>{cancelledOrders}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCards