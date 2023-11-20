import React from "react";
import "./WhySopa.css";

export default function WhySopa() {
    var whysopa_content_2_description ="Our Sopa midsole, featuring proprietary foam technology, offers exceptional cushioning and responds seamlessly to your every movement. As your feet shift throughout the day, our adaptable midsole foam adjusts accordingly, providing unparalleled comfort. To further enhance the midsole's durability and comfort, we've reinforced it with a non-slip rubber outsole, keeping the Sopa lightweight and reliable."; 
   
    return(
        <>
            <div className="whysopa-container">
                <div className="whysopa-container-1">
                    <div className="title-group minimize text-center">
                        <div className="title">
                            You won't come across an everyday 
                            shoe like this every day.
                        </div>
                        <div className="subtitle">
                            Sopas are thoughtfully crafted to complement and enhance the unique lifestyle that you lead.
                        </div>
                    </div>

                     <div className="whysopa-image-container">
                        <img src={require("./images/image 7.png")} alt=""/> 
                    </div>
                </div>
                
                <div className="whysopa-container-1">
                    <div className="column">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="68" viewBox="0 0 24 50" fill="none">
                        <path d="M10.9393 49.0607C11.5251 49.6464 12.4749 49.6464 13.0607 49.0607L22.6066 39.5147C23.1924 38.9289 23.1924 37.9792 22.6066 37.3934C22.0208 36.8076 21.0711 36.8076 20.4853 37.3934L12 45.8787L3.51472 37.3934C2.92893 36.8076 1.97919 36.8076 1.3934 37.3934C0.807613 37.9792 0.807613 38.9289 1.3934 39.5147L10.9393 49.0607ZM10.5 6.55671e-08L10.5 48L13.5 48L13.5 -6.55671e-08L10.5 6.55671e-08Z" fill="#02021D"/>
                        </svg>
                    </div>
                    
                    <div className="column">
                        <div className="text">
                            <span>
                                At Sopa, we embarked on a mission to create an everyday \
                                shoe that combines comfort, style,
                                and functionality. We asked ourselves 
                                questions that others didn't, like why 
                                shoes aren't available in quarter sizes or why shoelaces constantly come undone. By challenging conventional thinking,
                                we've revolutionized the shoe industry."
                            </span>
                    </div>

                    <div className="row">
                        <div className="column">
                            <div className="whysopa-image-container">
                                    <img src={require("./images/Photo (18).png")} alt=""></img>
                            </div>
                        </div>
                        <div className="column">
                                <div className="title-group minimize">
                                    <div className="title">
                                        Perfect Fit
                                    </div>
                                    <div className="subtitle text-black">
                                        For too long, ill-fitting shoes have been an
                                        unfortunate reality for most people due to 
                                        the lack of emphasis on proper sizing by
                                        shoe companies. However, Atoms is changing
                                        the game by prioritizing fit and offering
                                        quarter sizes, allowing you to finally 
                                        achieve the perfect fit you deserve. Don't
                                        settle for a shoe that's too big or
                                        too small - your ideal size may just
                                        be a 9.25 instead of a 9 or 9.5.
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>

                    
                </div>
                <div className="whysopa-container-1 bg-grey padding-top">
                        <div className="whysopa-container-1 minimize">
                            <div className="row">
                                <div className="column">
                                    <div className="title-group" >
                                        <div className="title" style={{fontSize:"22px"}}>
                                            A whole new level of comfort
                                        </div>
                                        <div className="subtitle text-black">
                                            {whysopa_content_2_description}
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="item">
                                        <img src={require("./images/Photo (19).png")} alt=""></img>
                                    </div>
                                </div>
                                
                            </div>
                            <div id="second" className="row padding">
                                <div className="column">
                                    <div className="whysopa-image-container" >
                                        <img src={require("./images/Photo (19).png")} alt=""></img>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="title-group" >
                                        <div className="title"  style={{fontSize:"22px"}}>
                                            Copper for a fresh feel
                                        </div>
                                        <div className="subtitle text-black">
                                            {whysopa_content_2_description}
                                        </div>
                                    </div>
                                    
                                </div>
                                    
                                </div>
                        </div>
                </div>

                <div className="whysopa-container-1 bg-black padding">
                    <div className="whysopa-container-1 ">
                        <div className="row">
                            <div className="column ">
                                <div className="title-group">
                                    <div className="title text-white">
                                        The shoelace reimagined
                                    </div>
                                    <div className="subtitle text-white">
                                        Our uniquely designed laces stay securely tied while also allowing for easy slip-on and slip-off of the shoes, making them perfect for hassle-free security checks at the airport. Thank us later!
                                    </div>
                                </div>
                                
                            </div>
                            <div className="column">
                                <div className="whysopa-image-container">
                                    <img src={require("./images/Photo (20).png")} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="whysopa-container-1  ">
                        <div className="row">
                            <div className="column ">
                                <div className="whysopa-image-container start">
                                    <img src={require("./images/Photo (21).png")} alt=""></img>
                                </div>
                            </div>
                            <div className="column">
                                <div className="title-group">
                                    <div className="title text-white">
                                        Weaving magic
                                    </div>
                                    <div className="subtitle text-white">
                                    Our proprietary blend of TPU-coated polyester yarn creates an upper for Sopa that is not only highly breathable and temperature-resistant but also remarkably versatile.Our proprietary blend of TPU-coated polyester yarn creates an upper for Sopa that is not only highly breathable and temperature-resistant but also remarkably versatile.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}