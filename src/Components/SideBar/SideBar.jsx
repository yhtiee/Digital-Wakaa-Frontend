import React from 'react'
import "./sideBar.css"
import {
    Link,
  } from "react-router-dom";
import { AiOutlineAccountBook, AiOutlineDashboard } from 'react-icons/ai';
import { GiShoppingCart } from 'react-icons/gi';
import { TiFolderAdd } from 'react-icons/ti';
import {VscAccount} from "react-icons/vsc"
import {RxDashboard} from "react-icons/rx"
import {RiCustomerServiceFill} from "react-icons/ri"
import {RiLogoutCircleLine} from "react-icons/ri"
import { useContext } from 'react';
import AuthContext from '../../Context API/AuthContext';
import digilogo from "../../assets/DIGIlogo.svg"


const SideBar = () => {

    let {logoutUser} = useContext(AuthContext)

  return (
    <div className="sidebar">
        <div className="sidebar__wrapper">
            <div className="sidebar__header">
                <Link to='/' className='nav__logo'>
                  <img src={digilogo} className="logo" alt="logo" style={{width:"150px", height:"60px"}} />
                </Link>
            </div>
            <div className="link__items">
                <ul className='links'>
                    <li><Link to="/dashboard"><RxDashboard/> <p>DASHBOARD</p> </Link></li>
                    <li><Link to="/orders"><GiShoppingCart/> <p>ORDERS</p></Link></li>
                    <li><a href=""><TiFolderAdd/> <p>ADD ORDERS</p></a></li>
                    <li><a href=""><VscAccount/> <p>ACCOUNT SETTINGS</p></a></li>
                    <li><a href="/" onClick={logoutUser}><RiLogoutCircleLine/> <p>LOGOUT</p></a></li>
                    <li><a href=""><RiCustomerServiceFill/> <p>CONTACT SUPPORT</p></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideBar