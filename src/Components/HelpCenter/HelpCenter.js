import React from "react";
import "./HelpCenter.css";
import { useNavigate } from "react-router";

export default function HelpCenter() { 

    const navigate = useNavigate();
    const images = [
        {
            image:"Photo (12).png",
            sentence:"Track your order",
        },
        {
            image:"Photo (13).png",
            sentence:"Start a return",
        },
        {
            image:"Photo (14).png",
            sentence:"FAQs",
            link:"/faq"
        },
        {
            image:"Photo (15).png",
            sentence:"Discount program",
        },
        {
            image:"Photo (16).png",
            sentence:"Refer a friend",
        },
        {
            image:"Photo (17).png",
            sentence:"Sopa Ambassador",
        },

    ]

    return(
        <>
            <div className="hp-container">
                <div className="hp-content">
                    <div className="title-question">
                        How can we help you?
                    </div>
                    <div className="links-container">
                        {images.map((item,index)=>{
                            return <div className="link-card" onClick={()=>{
                                if(item.link){
                                    navigate(item.link)
                                }
                                
                            }} >
                                <img alt="" className="link-img" src={require("./images/"+item.image)}></img>
                              
                                <div className="linkDetail-group">
                                    <div className="sentence">
                                        {item.sentence}
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12L19 12" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 5L19 12L12 19" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        })}
                        
                    </div>
                    <div className="subtitle-question">
                        Any Other Questions?
                    </div>
                    <div className="contact">
                    Contact us at support@sopa.com
                    </div>
                    <div className="contact">
                    or text us at +1 (917) 000-0000
                    </div>
                </div>
            </div>
        </>
    )
}