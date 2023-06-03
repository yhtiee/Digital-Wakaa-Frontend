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
                                <h4>{items.title}</h4>
                                <img src={items.image} alt="" />
                                <div className="info_wrapper">
                                    <p>{items.post}</p>
                                    <p className='date'>Date Posted {items.date}</p>
                                    <button className='btn btn-primary'>
                                        Read Full Article
                                    </button>
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
