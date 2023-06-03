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
                if (name == "Youtube Script Writing"){
                    navigate("/youtube")
                }
                if (name == "Blog Writing"){
                    navigate("/blog_writing")
                }
                if (name == "Copywriting"){
                    navigate("/copywriting")
                }
                if (name == "Social Media Management"){
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
                if (name == "Flyer Design"){
                    navigate("/flyer_design")
                }
                if (name == "Logo Design"){
                    navigate("/logo_design")
                }
                if (name == "Video Editing"){
                    navigate("/video_editing")
                }
                if (name == "Local SEO"){
                    navigate("/local_seo")
                }
                if (name == "Technical SEO"){
                    navigate("/technical_seo")
                }
                if (name == "Facebook Ads"){
                    navigate("/facebook_ads")
                }
                if (name == "Google Ads"){
                    navigate("/google_ads")
                }
                if (name == "Keyword Research"){
                    navigate("/keyword_search")
                }
                if (name == "Landing Pages"){
                    navigate("/landing_pages")
                }
                if (name == "WordPress Web Development"){
                    navigate("/wordpress")
                }
                if (name == "Fullstack Web Development"){
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