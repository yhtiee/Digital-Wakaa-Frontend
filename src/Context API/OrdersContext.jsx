import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "./API";

const OrderContext = createContext()
export default OrderContext

export const OrderProvider = ({children}) => {

  let navigate = useNavigate()

  let [orders, setOrders] = useState([])

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
        }
    }
    else{
        console.log("error")
        // setError("Invalid Username or Password")
    }
  }

  let contextData = {
    createOrder : createOrder
  }
    
  
  return (
    <OrderContext.Provider value={contextData}>
      {children}
    </OrderContext.Provider>
  )

}