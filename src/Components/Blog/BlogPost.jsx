import React from 'react'
import BlogContext from '../../Context API/BlogContext';
import { useContext, useEffect } from 'react';
import "./blogPost.css"

const BlogPost = () => {
    let {post} = useContext(BlogContext)

  return (
    <section id='blog__post'>
        <div className="container post__container">
            <div className="post__wrapper">
                {post.map((items) => {
                    return (
                        <div className='post' key={items.id}>
                            <div className="blog__post">
                                <img src={items.image} alt="" />
                                <div className="info__wrapper">
                                    <h2>{items.title}</h2>
                                    <h4>{items.sub_title}</h4>
                                    <p>{items.post}</p>
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

export default BlogPost