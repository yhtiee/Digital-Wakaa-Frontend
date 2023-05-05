import React from 'react'
import "./blog.css"
import BlogContext from '../../Context API/BlogContext';
import { useContext, useEffect } from 'react';

export const BlogCards = () => {

    let {blog} = useContext(BlogContext)
    let {getBlogList} = useContext(BlogContext)
    let {getPost} = useContext(BlogContext)

    useEffect(() => {
        getBlogList()
      }, [])

    let SendId = (e, id) => {
        getPost(id)
    }

  return (
    <section id='blog'>
        <div className="container blog__container">
            <div className="blog__wrapper">
                {blog.map((items) => {
                    return (
                        <div className='click__post' key={items.id} onClick={e => SendId(e, items.id)}>
                            <div className="blog__post">
                                <img src={items.image} alt="" />
                                <div className="info_wrapper">
                                    <h2>{items.title}</h2>
                                    {/* <h4>{items.sub_title}</h4> */}
                                    <p>Date Posted {items.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
