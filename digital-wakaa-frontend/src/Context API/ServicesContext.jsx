import React, { createContext, useState, useEffect } from "react";
import API_URL from "./API";
import {
    useNavigate
  } from "react-router-dom";

const ServiceContext = createContext()

export default ServiceContext

export const ServiceProvider = ({children}) => {

    const [services, setServices] = useState([])
    const [service, setService] = useState([])
    const [miniService, setMiniServices] = useState([])
    const [retrievedMiniService, setRerievedService] = useState([])
    const [miniServices, setMiniService] = useState([])
    const [works, setHowItWorks] = useState([])

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

    async function getMiniServices(){
        let response = await fetch(`${API_URL}services/retrieve_mini_service/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setMiniServices(data)   
                console.log("dataFetched")
                console.log(data)

            }
        }
        else{
            console.log("error")
        }
    }

    async function retrieveService(id, name){
        let response = await fetch(`${API_URL}services/view_service/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                let service = []
                service.push(data)
                setService(service)
                console.log("dataFetched")
                // console.log(data)
                navigate("/service")
            }
        }
        else{
            console.log("error")
        }
    }

    async function retrieveSpecificMiniServices(id){
        let response = await fetch(`${API_URL}services/mini_services/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setMiniService(data.mini_services)
                console.log(data.mini_services)
            }
        }
        else{
            console.log("error")
        }
    }

    async function retrieveSpecificMiniService(id, name){
        let response = await fetch(`${API_URL}services/retrieve_single_mini_service/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                let miniService = []
                miniService.push(data)
                setRerievedService(miniService)
                console.log(data)
                if (name == "YouTube script-writing"){
                    navigate("/youtube")
                }
                if (name == "Blog like a boss with our expert writing services!"){
                    navigate("/blog_writing")
                }
                if (name == "Copywriting"){
                    navigate("/copywriting")
                }
                if (name == "Social media management"){
                    navigate("/social_media")
                }
                if (name == "Email copywriting"){
                    navigate("/email_copywriting")
                }
                if (name == "SEO blog writing"){
                    navigate("/seo_blog")
                }
                if (name == "Lead Generation"){
                    navigate("/lead_gen")
                }
                if (name == "Flyer design"){
                    navigate("/flyer_design")
                }
                if (name == "Logo design"){
                    navigate("/logo_design")
                }
                if (name == "Video editing"){
                    navigate("/video_editing")
                }
                if (name == "Local SEO"){
                    navigate("/local_seo")
                }
                if (name == "Technical SEO"){
                    navigate("/technical_seo")
                }
                if (name == "Facebook ads"){
                    navigate("/facebook_ads")
                }
                if (name == "Google ads"){
                    navigate("/google_ads")
                }
                if (name == "Keyword research"){
                    navigate("/keyword_search")
                }
                if (name == "Landing pages"){
                    navigate("/landing_pages")
                }
                if (name == "WordPress web development"){
                    navigate("/wordpress")
                }
                if (name == "Fullstack web development"){
                    navigate("/full_stack")
                }
                if (name == "E-commerce"){
                    navigate("/ecommerce")
                }
  
            }
        }
        else{
            console.log("error")
        }
    }

    async function retrieveServiceWorks(id){
        let response = await fetch(`${API_URL}services/view_works/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setHowItWorks(data.howItWorks)
                console.log(data)
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
        service : service,
        retrieveServiceWorks : retrieveServiceWorks,
        works : works,
        getMiniServices : getMiniServices,
        miniService : miniService,
        retrieveSpecificMiniServices : retrieveSpecificMiniServices,
        miniServices : miniServices,
        retrievedMiniService : retrievedMiniService,
        retrieveSpecificMiniService : retrieveSpecificMiniService,

    }

    return (
        <ServiceContext.Provider value = {contextData}>
            {children}
        </ServiceContext.Provider>
    )
}