import React from "react";
import "./Footer.css";
import logo from "../../images/Logo.svg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";
import { Link } from "react-router-dom";




function Footer(){
    var footer = [
        {
            title: "Product",
            data: [
                { name: "Model 000", Link: "/model-000" },
                { name: "Model 001", Link: "/model-001" },
                { name: "Laces", Link: "/laces" },
                { name: "Masks", Link: "/masks" },
                { name: "No-show Socks", Link: "/no-show-socks" },
                { name: "Crew Socks", Link: "/crew-socks" },
                { name: "Gift Cards", Link: "/gift-cards" }
            ]
        },
        {
            title: "Support",
            data: [
                { name: "Help Center", Link: "/help-center" },
                { name: "FAQs", Link: "/faq" },
                { name: "Order", Link: "/order" },
                { name: "Order Status", Link: "/order-status" },
                { name: "Returns & Exchanges", Link: "/returns-exchanges" },
                { name: "Contact Us", Link: "/contact-us" }
            ]
        },
        {
            title: "Everything Else",
            data: [
                { name: "Community", Link: "/community" },
                { name: "Why Sopa", Link: "/why-sopa" },
                { name: "About", Link: "/about" },
                { name: "Discount Program", Link: "/discount-program" },
                { name: "Sopa Blog", Link: "/sopa-blog" },
                { name: "Sopa Ambassadors", Link: "/sopa-ambassadors" }
            ]
        }
    ]
    

    return(
        <>
            <div className="footer">
                <div className="content">
                    <div className="content-1 ">
                        <img src={logo} alt="logo-footer"></img>
                        <div className="content-item">
                        Stay informed about Sopa with our latest 
                            releases and founder news.
                        </div>
                        <div className="button-footer">
                            <div className="button-footer-content">
                                Enter email here for updates
                            </div>
                        </div>
                    </div>
                    
                    {footer.map((element,index)=>{
                        return <div className="content-2">
                            <div className="content-item title">
                                {element.title}
                            </div>
                            {element.data.map((_element,index)=>{
                                return <Link className="Link" to={_element.Link}><div className="content-item">{_element.name}</div></Link>
                            })}

                        </div>
                    })}

                    <div className="content-social">
                        <div className="social-group">
                            <img alt=""  className="social-img" src={Facebook}>

                            </img>
                            <div className="content-item">
                                Facebook
                            </div>
                        </div>

                        <div className="social-group">
                            <img alt=""  className="social-img" src={Instagram}>
                                
                            </img>
                            <div className="content-item">
                                Instagram
                            </div>
                        </div>

                        <div className="social-group">
                            <img alt=""  className="social-img" src={Twitter}> 

                            </img>
                            <div className="content-item">
                                Twitter
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;