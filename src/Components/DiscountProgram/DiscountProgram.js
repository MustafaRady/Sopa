import React from "react";
import "./DiscountProgram.css";
export default function DiscountProgram(){

    let array_of_answers = [
        {
            sentence1:"Teachers and Students - 15%",
            sentence2:"Teachers, teaching assistants and aides, administrators, and students enrolled at a college, university, or technical program within the US and Canada"
        },
        {
            sentence1:"Healthcare Professionals - 10%",
            sentence2:"Doctors, nurses, and other healthcare professionals"
        },
        {
            sentence1:"First Responders - 10%",
            sentence2:"Police, Fire Fighters, and EMTs"
        },
        {
            sentence1:"Seniors - 10%",
            sentence2:"Those who are age 65 and older",
        },
        {
            sentence1:"Government Employees - 10%",
            sentence2:"Local, state, and federal employees"
        },
        {
            sentence1:"Military - 10%",
            sentence2:"Active duty, the reserves, national guard, retirees, veterans, and military families"
        }
    ];
    return (
        <>
            <div className="DiscountProgram_container">
                <div className="DP_container">
                    <div className="row "  >
                        <div className="DP_detail_group ">
                            <div className="DP_question ">
                            Supporting those who are making a better tomorrow
                            </div>
                            <div className="DP_answer">
                            Enjoy a special discount of 10-15% on all orders, exclusively for teachers, students, healthcare workers, military and other government agencies, first responders, and seniors.
                            </div>
                        </div>
                        <div className="DP_image_container">
                            <img alt=""  src={require("./images/Photo (3).png")}>
                            </img>
                        </div>
                    </div>

                    <div className="row toleft"> 
                        <div className="DP_image_container">
                            <img alt=""  src={require("./images/Photo (4).png")}>
                            </img>
                        </div>
                        <div className="DP_detail_group">
                            <div className="DP_question">
                            Who is eligible for discounts?
                            </div>
                            <div className="DP_answers_group">
                                {array_of_answers.map((item,index)=>{
                                    return <div >
                                            <div className="DP_answer">
                                                {item.sentence1}
                                            </div>
                                            <div className="DP_answer">
                                                {item.sentence2}
                                            </div>
                                        </div>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="row toright">
                        <div className="DP_detail_group">
                            <div className="DP_question">
                            Supporting those who are making a better tomorrow
                            </div>
                            <div className="DP_answer">
                            Enjoy a special discount of 10-70% on all orders, exclusively for teachers, students, healthcare workers, military and other government agencies, first responders, and seniors.
                            </div>
                        </div>
                        <div className="DP_image_container">
                            <img alt=""  src={require("./images/Photo (5).png")}>
                            </img>
                        </div>
                    </div>

                    <div className="row toleft">
                        <div className="DP_image_container" >
                            <img alt=""  src={require("./images/Photo (6).png")}>
                            </img>
                        </div>

                        <div className="DP_detail_group width-66">
                            <div className="DP_question">
                            Don't work in any of the 
                            above fields?
                            </div>
                            <div className="DP_answer">
                            No worries, we have an incredible referral program that's open to all. Simply visit our referral page and share the word about us with your friends and family. They'll receive a $20 discount, and as a token of appreciation, you'll also receive a $20 reward for spreading the love.
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}