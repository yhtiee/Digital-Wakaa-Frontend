import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import API_URL from "./API";
import {
    useNavigate
  } from "react-router-dom";

const ServiceContext = createContext()

export default ServiceContext

export const ServiceProvider = ({children}) => {

    const [services, setServices] = useState([])
    const [service, setService] = useState([])
    const [plans, setPlans] = useState([])


    let navigate = useNavigate()

    async function getServices(){
        let response = await fetch(`${API_URL}services/list_service/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setServices(data)   
                console.log("dataFetched")
                console.log(data)

            }
        }
        else{
            console.log("error")
        }
    }

    async function retrieveService(id){
        let response = await fetch(`${API_URL}services/view_service/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setService(localStorage.setItem("service", JSON.stringify(data.service)))
                setPlans(localStorage.setItem("plans", JSON.stringify(data.plans))) 
                console.log("dataFetched")
                console.log(data)
                navigate("/service")
            }
        }
        else{
            console.log("error")
        }
    }

   let  contextData = {
        services : services,
        getServices : getServices,
        retrieveService : retrieveService,
        service : service
    }

    return (
        <ServiceContext.Provider value = {contextData}>
            {children}
        </ServiceContext.Provider>
    )
}