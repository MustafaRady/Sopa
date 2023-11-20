import React from "react";
import "./About.css";

export default function About(){

    return(<>
        <div className="about_container">
            <div className="about_container_2">
                <div className="image-container">
                    <img src={require("./images/Rectangle 1.png") } alt="">
                    
                    </img>
                </div>
                <div className="Details_container">
                    <div className="Detail_question">
                    Why start another shoe company?
                    </div>
                    <div className="Detail_sub_question">
                    We are committed to making our shoes more sustainable.
                    </div>
                    <div className="Detail_paragraph">
                    Our pursuit of crafting the perfect shoe gave birth to Atoms, and along with it, a vibrant community of individuals who share our passion. Our relentless commitment to improving our footwear and prioritizing our customers' satisfaction has led us to incorporate only the finest materials and fabrics, disregarding their cost. At Atoms, our sole focus is to create a shoe that you'll be proud to wear every day. Although we're uncertain about the path that lies ahead, we invite you to accompany us on this exhilarating journey."
                    </div>
                    <div className="Detail_link">
                    Read our story featured in Humans of New York
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.16732 10L15.834 10" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.0007 4.16669L15.834 10L10.0007 15.8334" stroke="#02021D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <div className="Detail_signature">
                        <img alt=""  src={require("./images/Signature.png")}></img>
                    </div>
                    <div className="Detail_footer_text">
                    SOPA CO-FOUNDERS
                    </div>
                </div>
            </div>
        </div>
    </>)
}