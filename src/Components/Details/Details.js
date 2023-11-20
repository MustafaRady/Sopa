import React from "react";
import "./Details.css";
import detail_1_image from "../../images/detail-1-image.png"
import detail_2_image from "../../images/detail-2-image.png"

import photo1 from "./photos/photo1.png"
import photo2 from "./photos/photo2.png"
import photo3 from "./photos/photo3.png"
import photo4 from "./photos/photo4.png"


function Details(){

    var photos = [photo1,photo2,photo3,photo4];

    return(
        <>
            <div className="Detail-container">
                <div className="Detail-group">
                    <div className="detail-image-container"> 
                        <img src={require("./photos/photo1.png")} style={{width:"100%"}}></img>
                    </div>

                    <div className="detail-button-container"> 
                        <div className="story-button">
                            Story
                        </div>
                        <div className="detail">
                            SOPA 
                        </div>  
                    </div>

                    <div className="detail-text-container">
                        <div className="text">
                            SOPA was born out of a simple yet powerful concept - creating a shoe that you would choose to wear every single day, and they've brought this idea to life in the bustling city of New York.
                        </div>
                        <div className="learnMore-button">
                            Learn More
                        </div>
                    </div>
                </div>


                <div className="Detail-group">
                    <div className="detail-image-container"> 
                        <img src={require("./photos/photo2.png")} style={{width:"100%"}}></img>
                    </div>

                    <div className="detail-button-container"> 
                        <div className="story-button">
                           Featured
                        </div>
                        <div className="detail">
                        HUMANS OF NEW YOUK
                        </div>  
                    </div>

                    <div className="detail-text-container">
                        <div className="text">
                        Read our co-founder Sidra’s story about struggle, chasing dreams, and making shoes.
                        </div>
                        <div className="learnMore-button">
                            Learn More
                        </div>
                    </div>
                </div>

                <div className="Detail-group-2">
                    <div className="detail-image-container"> 
                        <img src={require("./photos/photo1.png")} style={{width:"100%"}}></img>
                    </div>
                    <div className="detail-image-container"> 
                        <img src={require("./photos/photo2.png")} style={{width:"100%"}}></img>
                    </div>
                    <div className="detail-image-container"> 
                        <img src={require("./photos/photo3.png")} style={{width:"100%"}}></img>
                    </div>
                    <div className="detail-image-container"> 
                        <img src={require("./photos/photo4.png")} style={{width:"100%"}}></img>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Details;