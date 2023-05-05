import React, { createContext, useState, useEffect } from "react";
import API_URL from "./API";
import {
    useNavigate
} from "react-router-dom";

const BlogContext = createContext()

export default BlogContext

export const BlogProvider = ({children}) => {

    let  [blog, setBlog] = useState([])
    let  [post, setPost] = useState([])

    let navigate = useNavigate()

    async function getBlogList(){
        let response = await fetch(`${API_URL}blog/list_blog_post/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                setBlog(data)   
                console.log("dataFetched")
                console.log(data)
                // navigate("/blog")
            }
        }
        else{
            console.log("error")
        }
    }

    async function getPost(id){
        let response = await fetch(`${API_URL}blog/retrieve_blog_post/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                let blogPost = []
                blogPost.push(data)
                setPost(blogPost)   
                navigate("/post")
            }
        }
        else{
            console.log("error")
        }
    }

    let contextData = {
        blog : blog,
        getBlogList : getBlogList,
        post : post,
        getPost : getPost
    }

    return (
        <BlogContext.Provider value={contextData}>
            {children}
        </BlogContext.Provider>
    )
}