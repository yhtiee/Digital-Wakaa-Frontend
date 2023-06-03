import React from 'react'
import "./description.css"
import Number1 from "../../assets/1green.png"
import Number2 from "../../assets/2green.png"
import Number3 from "../../assets/3green.png"

import Number1blue from "../../assets/1.png"
import Number2blue from "../../assets/2.png"
import Number3blue from "../../assets/3.png"
import Number4blue from "../../assets/4.png"



const BlogWritingDescripion = () => {
  return (
    <div id='descriptions'>
        <div className="container descripion__container">
            <div className="description__wrapper">
                <div className="des__top">
                    <h2>And Why Do We Care?</h2>
                    <p>Because we understand that quality blog articles are a vital component of any successful content marketing strategy. They help your brand establish thought leadership, engage your target audience, and increase your website traffic.</p>
                    <p>
                        By incorporating targeted keywords and internal links, our blog writing services improve your website's SEO and increase your visibility in search engine rankings. Let us help you create compelling blog content that resonates with your audience and drives measurable results for your business
                    </p>
                </div>
                <hr />
                <div className="des__midddle">
                    <h2>Our Blog Writing Services In Action</h2>
                    <div className="action">
                        <div className="acion__one">
                            {/* <img src={Number1} alt="" /> */}
                            <div className="number"><h2>1</h2></div>
                            <h4>Share Your Vision</h4>
                            <p>We start by learning about your project goals, target audience, and unique voice. Our brief questionnaire helps us develop a personalized approach to your blog writing needs.</p>
                        </div>
                        <div className="acion__two">
                            {/* <img src={Number2} alt="" /> */}
                            <div className="number"><h2>2</h2></div>
                            <h4>Writing Magic</h4>
                            <p>Our best guy gets to work crafting your content. We'll refine and perfect your blog until it's just right, keeping you in the loop every step of the way.</p>
                        </div>
                        <div className="acion__three">
                            {/* <img src={Number3} alt="" /> */}
                            <div className="number"><h2>3</h2></div>
                            <h4>Delivery in Style</h4>
                            <p>Once your blog is ready to go, we'll deliver it to you in your preferred format.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="dec__bottom">
                    <h2>Here's Why We're The Ones For The Job (And We Promise We Won't Let It Go To Our Heads)</h2>
                    <div className="job">
                        <div className="job__one">
                        <div className="number"><h2>1</h2></div>
                            {/* <img src={Number1blue} alt="" /> */}
                            <h4>Native writers (UK/US Writers)</h4>
                            <p>We’ll produce exceptional blog content written in UK and US English.</p>
                        </div>
                        <div className="job__two">
                            {/* <img src={Number2blue} alt="" /> */}
                            <div className="number"><h2>2</h2></div>
                            <h4>Topic Creation</h4>
                            <p>You can provide your own title or let our blog writers craft clear and intriguing titles for you.</p>
                        </div>
                        <div className="job__three">
                        <div className="number"><h2>3</h2></div>
                            {/* <img src={Number3blue} alt="" /> */}
                            <h4>Fast Turnaround</h4>
                            <p>We can complete small projects in just 48 hours with unlimited revisions.</p>
                        </div>
                        <div className="job__four">
                        <div className="number"><h2>4</h2></div>
                            {/* <img src={Number4blue} alt="" /> */}
                            <h4>SEO-optimized</h4>
                            <p>We use the latest SEO techniques and tools to optimize your blog posts for the right keywords and phrases.</p>
                        </div>
                        <div className="job__five">
                        <div className="number"><h2>5</h2></div>
                            {/* <img src={Number1blue} alt="" /> */}
                            <h4>Top-notch quality</h4>
                            <p>We research and understand your industry, then create content that resonates with your readers and help you achieve your business goals.</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default BlogWritingDescripion