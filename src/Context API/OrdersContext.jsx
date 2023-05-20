import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "./API";

const OrderContext = createContext()
export default OrderContext

export const OrderProvider = ({children}) => {

  let navigate = useNavigate()

  let [orders, setOrders] = useState([])
  let [totalOrders, setTotalOrders] = useState(null)
  let [pendingOrders, setPendingOrders] = useState(null)
  let [completedOrders, setCompletedOrders] = useState(null)
  let [cancelledOrders, setCancelledOrders] = useState(null)


  async function createOrder(service, cost, status){
    let token = JSON.parse(localStorage.getItem("authTokens"))
    let access = token.access
    console.log(status)
    let response = await fetch (`${API_URL}orders/create_order/`, {  
        method: "POST",
        headers: {
          'Authorization': `Bearer ${access}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'service': service, 'cost': cost, "status":status})
    })
    if (response.ok){
        let data = await response.json()
        if(response.status === 201){
            console.log(data)
            navigate("/orders")
        }
    }
    else{
        console.log("error")
    }
  }

  async function getTotalOrders(){
    let token = JSON.parse(localStorage.getItem("authTokens"))
    let access = token.access

    let response = await fetch (`${API_URL}orders/total_orders/`, {  
        method: "GET",
        headers: {
          'Authorization': `Bearer ${access}`,
          'Content-Type': 'application/json'
        },
       
    })
    if (response.ok){
        let data = await response.json()
        if(response.status === 200){
            console.log(data.total_orders)
            setTotalOrders(data.total_orders)
        }
    }
    else{
        console.log("error")
    }
  }

  async function getPendingOrders(){
    let token = JSON.parse(localStorage.getItem("authTokens"))
    let access = token.access
    let response = await fetch (`${API_URL}orders/pending_orders/`, {  
        method: "GET",
        headers: {
          'Authorization': `Bearer ${access}`,
          'Content-Type': 'application/json'
        },
       
    })
    if (response.ok){
        let data = await response.json()
        if(response.status === 200){
            console.log(data.pending_orders)
            setPendingOrders(data.pending_orders)
        }
    }
    else{
        console.log("error")
    }
  }

  async function getCompletedOrders(){
    let token = JSON.parse(localStorage.getItem("authTokens"))
    let access = token.access
    let response = await fetch (`${API_URL}orders/completed_orders/`, {  
        method: "GET",
        headers: {
          'Authorization': `Bearer ${access}`,
          'Content-Type': 'application/json'
        },
       
    })
    if (response.ok){
        let data = await response.json()
        if(response.status === 200){
            console.log(data.completed_orders)
            setCompletedOrders(data.completed_orders)
        }
    }
    else{
        console.log("error")
    }
  }

  async function getCancelledOrders(){
    let token = JSON.parse(localStorage.getItem("authTokens"))
    let access = token.access
    let response = await fetch (`${API_URL}orders/cancelled_orders/`, {  
        method: "GET",
        headers: {
          'Authorization': `Bearer ${access}`,
          'Content-Type': 'application/json'
        },
       
    })
    if (response.ok){
        let data = await response.json()
        if(response.status === 200){
            console.log(data.cancelled_orders)
            setCancelledOrders(data.cancelled_orders)
        }
    }
    else{
        console.log("error")
    }
  }


  let contextData = {
    createOrder : createOrder,
    getTotalOrders : getTotalOrders,
    totalOrders : totalOrders,
    getPendingOrders : getPendingOrders,
    pendingOrders : pendingOrders,
    completedOrders : completedOrders,
    getCompletedOrders : getCompletedOrders,
    getCancelledOrders : getCancelledOrders,
    cancelledOrders : cancelledOrders
  }
    
  
  return (
    <OrderContext.Provider value={contextData}>
      {children}
    </OrderContext.Provider>
  )

}