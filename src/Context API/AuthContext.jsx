import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import API_URL from "./API";


const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {

    let [authToken, setAuthToken] = useState(() => localStorage.getItem("authTokens")? JSON.parse(localStorage.getItem("authTokens")): null)
    let [user, setUser] = useState(() => localStorage.getItem("authTokens")? jwt_decode(localStorage.getItem("authTokens")): null)
    let [loading, setLoading] = useState(true)
    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)

    let navigate = useNavigate()

    async function SignupUser(LAST_NAME, FIRST_NAME, USERNAME, EMAIL, PASSWORD){
        let response = await fetch (`${API_URL}auth/signup/`, {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': USERNAME, 'password': PASSWORD, "last_name":LAST_NAME, "first_name":FIRST_NAME, "email":EMAIL })
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 201){
                navigate("/login")
                console.log(data)
                let email = data.email
                localStorage.setItem("email", JSON.stringify(email))
            }
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
        }
    }
    
    async function loginUser(use, pass){
        // console.log(use,pass)
        let response = await fetch (`${API_URL}auth/token/`, {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': use, 'password': pass})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setAuthToken(data)
                console.log(data)
                setUser(jwt_decode(data.access))
                console.log(jwt_decode(data.access))
                localStorage.setItem("authTokens", JSON.stringify(data))
                SetSuccess("Successfully Logged In")
                navigate("/")
            }
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
        }
    }


    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        navigate("/")

    }


    // uPdate the token every 5mins sending the refresh token to the backend
    let updateToken = async () =>{
        console.log("update called")
        let auth =   JSON.parse(localStorage.getItem("authTokens"))
        let response = await fetch (`${API_URL}auth/token/refresh/`, {  
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"refresh":auth.refresh})
        
        })
        if (response.ok){
            let data = await response.json()
            if (response.status === 200){
                setAuthToken(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem("authTokens", JSON.stringify(data))
            }else{
                logoutUser()
            }

        }
    }

    //  used to call the update token every 2 seconds
    useEffect(() => {
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authToken){
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)
       
    }, [authToken, loading])
    
    let contextData = {
        user : user? user.username:null,
        loginUser: loginUser,
        logoutUser : logoutUser,
        error : error ,
        SignupUser : SignupUser
      }

  return (

    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>

  )

}

