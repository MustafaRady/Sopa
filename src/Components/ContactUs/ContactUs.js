import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
    return (
        <>
        <div className="contactus-container">
            <div className="contactus-content">
                <div className="title">
                    Contact Us
                </div>
                <div className="subtitle">
                    Any questions? Just write us a message!
                </div>
            </div>
            <div className="contactus-card-group-container">
                <div className="contactus-card-group">
                    <div className="card">
                        <div className="title">
                            Send us a message, and we’ll be in touch as 
                            soon as possible.
                        </div>
                        <input className="input" placeholder=" First Name"></input>
                        <input className="input" placeholder=" Last Name"></input>
                        <input className="input" placeholder=" Phone Number"></input>
                        <input className="input" placeholder=" Email Address"></input>
                        <input className="input" placeholder=" Subject"></input>
                        <input id="text" placeholder=" How can we help you ? "></input>
                    </div>
                    <div className=" card-2">
                        <div className="titles">
                            <div className="title">
                                Get in touch
                            </div>
                            <div className="subtitle">
                                We’d love to hear from you. our team is always ready to chat.
                            </div>
                        </div>
                        <div className="details-group">
                            <div className="detail-item" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <div>
                                New York
                                </div>
                            </div>

                            <div className="detail-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22.0004 16.92V19.92C22.0016 20.1985 21.9445 20.4742 21.8329 20.7293C21.7214 20.9845 21.5577 21.2136 21.3525 21.4019C21.1473 21.5901 20.905 21.7335 20.6412 21.8227C20.3773 21.9119 20.0978 21.9451 19.8204 21.92C16.7433 21.5856 13.7874 20.5341 11.1904 18.85C8.77425 17.3147 6.72576 15.2662 5.19042 12.85C3.5004 10.2412 2.44866 7.271 2.12042 4.18C2.09543 3.90347 2.1283 3.62476 2.21692 3.36163C2.30555 3.09849 2.44799 2.85669 2.63519 2.65162C2.82238 2.44655 3.05023 2.28271 3.30421 2.17052C3.5582 2.05834 3.83276 2.00026 4.11042 2H7.11042C7.59573 1.99523 8.06621 2.16708 8.43418 2.48353C8.80215 2.79999 9.0425 3.23945 9.11042 3.72C9.23704 4.68007 9.47187 5.62273 9.81042 6.53C9.94497 6.88793 9.97408 7.27692 9.89433 7.65088C9.81457 8.02485 9.62928 8.36811 9.36042 8.64L8.09042 9.91C9.51398 12.4135 11.5869 14.4864 14.0904 15.91L15.3604 14.64C15.6323 14.3711 15.9756 14.1859 16.3495 14.1061C16.7235 14.0263 17.1125 14.0555 17.4704 14.19C18.3777 14.5286 19.3204 14.7634 20.2804 14.89C20.7662 14.9585 21.2098 15.2032 21.527 15.5775C21.8441 15.9518 22.0126 16.4296 22.0004 16.92Z" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <div>
                                +1 (917) 000-0000
                                </div>
                            </div>

                            <div className="detail-item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 6L12 13L2 6" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <div>
                                info@sopa.com
                                </div>
                            </div>
                    
                        </div>

                        <div className="detail-group">
                            
                            <div className="detail-item bordered">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.5 3C12.8199 2.99656 14.1219 3.30493 15.3 3.9C16.7118 4.60557 17.8992 5.69025 18.7293 7.03255C19.5594 8.37485 19.9994 9.92176 20 11.5C20.0035 12.8199 19.6951 14.1219 19.1 15.3L21 21L15.3 19.1C14.1219 19.6951 12.8199 20.0034 11.5 20C9.92179 19.9994 8.37488 19.5594 7.03258 18.7293C5.69028 17.8992 4.6056 16.7117 3.90003 15.3C3.30496 14.1219 2.99659 12.8199 3.00003 11.5L3.00003 11C3.11502 8.91565 3.99479 6.94696 5.47089 5.47086C6.94698 3.99476 8.91568 3.11499 11 3L11.5 3Z" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                Back to Shop
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}