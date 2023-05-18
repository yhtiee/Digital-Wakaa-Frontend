import React from 'react'
import {MdPendingActions} from "react-icons/md"
import {IoTicket} from "react-icons/io5"
import { GiShoppingCart } from 'react-icons/gi';
import {GiCancel} from "react-icons/gi"
import "./dashboardCards.css"

const DashboardCards = () => {
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
            <h1>10</h1>
          </div>
        </div>
        <div className="card">
          <div className="card_left">
              <IoTicket className='icon'/>
          </div>
          <div className="card_right_pending">
            <h4>Completed Orders</h4>
            <h1>10</h1>
          </div>
        </div>
        <div className="card">
          <div className="card_left">
            <MdPendingActions className='icon'/>
          </div>
          <div className="card_right_pending">
            <h4>Pending Orders</h4>
            <h1>10</h1>
          </div>
        </div>
        <div className="card">
          <div className="card_left">
              <GiCancel className='icon_green'/>
          </div>
          <div className="card_right_total">
            <h4>Cancelled Orders</h4>
            <h1>10</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCards