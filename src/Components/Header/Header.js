import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
            <div className="header-content">
                <div className="image_container">
                    <img alt=""  src={require("./images/Header.png")}></img>
                </div>
                
                
                <div className="floating-box">
                    <div className="subtitle">
                        Step inside, for 
                        comfort and magic 
                        await you
                    </div>
                   <Link className="button" to={"/explore"}>
                   <div >
                        <div className="button-content">Shop Now</div>
                    </div>
                   </Link>
                </div>
                

                
            </div>
        </>
    )
}

export default Header;