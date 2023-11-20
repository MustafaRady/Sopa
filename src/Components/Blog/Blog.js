import React from "react";

import "./Blog.css"

export default function Blog(){

    const __array=[
        {
            image:"Photo.png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (1).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (2).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (3).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (4).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (5).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (6).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (7).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (8).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (9).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (10).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        },
        {
            image:"Photo (11).png",
            date:"March 15, 2023",
            content:"K-Pop Singers Spotted Wearing Sopa Shoes"
        }
    ]


    return (
        <>
        <div className="blog-container">
            <div className="blog-header">
                <div className="blog-header-group">
                    <div className="title">
                        The Sopa Blog
                    </div>
                    <div className="subtitle">
                        Your Source for CRO Content
                    </div>
                </div>
            </div>
            

            <div className="blogs-container">
                {__array.map((item,index)=>{
                    return  <div className="blog-card">
                                <div className="image-container">
                                    <img alt="" src={require("./images/"+(item.image))}></img>
                                </div>

                                <div className="blog-content">
                                    {item.content}
                                </div>

                                <div className="blog-date">
                                    {item.date}
                                </div>
                                
                            </div>
                })}

            </div>
        </div>
        </>
    )
}