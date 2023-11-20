import React from "react";
import "./Faq.css";

export default function Faq() {

    const setOfQuestions_column_1=[
        {
            title:"Top Questions",
            questions:[
                "How do I exchange/return my Atoms shoes?",
                "What is the return policy?",
                "What size should I order?",
                "When will my order be shipped? (Order status/ETA)"
            ]
        },
        {
            title:"Ordering",  
            questions:[
                "Do you ship internationally?",
                "Can I buy Atoms at a store?",
                "How do I find my order number?",
                "How did I pay for my order?",
                "Is there a minimum/maximum order?"
            ]
        },
        {
            title:"Returns and Exchanges",
            questions:[
                "I lost the return label, can I get a new one?",
                "My return label isn't showing up when I click it.",
                "When will I receive my refund?",
                "How much is it to return a pair of Atoms shoes?",
                "I received the incorrect order"
            ]
        },
        {
            title:"Customer Experience",
            questions:[
                "How to get a discount with ID.me?",
                "Do you have any sales, coupons, discount codes, promo codes, or referral programs?",
                "I can't find what I am looking for!",
                "How much is it to return a pair of Atoms shoes?"
            ]
        },
        {
            title:"Website Data Security and Privacy Policy ",
            questions:[
                "How do I unsubscribe from emails?",
                "What data is collected?"
            ]
        },
        
    ]

    const setOfQuestions_column_2 =[
        {
            title:"Shoes",
            questions:[
                "Can I change the insoles?",
                "How do I clean my Atoms shoes?",
                "Comparing 000 and 001 - what is the difference between the Model 000 and Model 001?",
                "Do Atoms come in various widths for wide or narrow feet?",
                "When will you release more colors?"
            ]
        },
        {
            title:"Shipping",
            questions:[
                "Which countries do you ship to?",
                "International Shipping",
                "How do I stop or hold a delivery?",
                "How do I find my tracking number?",
                "Can you hold my order till (date)?"
            ]
        },
        {
            title:"Gifting",
            questions:[
                "What if I don't know their size?",
                "How to get and claim a referral discount",
                "Can I return or exchange a gift order?",
                "How do I redeem my gift card?",
                "Can I gift someone a pair of Sopa?"
            ]
        },
        {
            title:"SOPA, Inc.",
            questions:[
                "Corporate Social Responsibility",
                "Where are Sopa made?",
                "I am looking to speak with someone in Public Relations",
                "How do I work at Sopa?"
            ]
        },
        {
            title:"Website Data Security and Privacy Policy ",
            questions:[
                "How do I unsubscribe from emails?",
                "What data is collected?"
            ]
        }
    ]

    return (
        <div className="helpcenter-container">
            <div className="helpcenter-content">
                <div className="helpcenter-question">
                    How can we help you? 
                </div>

                <div className="helpcenter-search-container">
                    <div className="helpcenter-search-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#75869C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 17.5L13.875 13.875" stroke="#75869C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <input className="helpcenter-search" type="text" placeholder="What can we help you with?"></input>
                    </div>
                </div>
            </div>

            <div className="helpcenter-faq-container" >{/* //container containes 2 columns  */}
                <div className="content-group">
                    <div className="helpcenter-faq-content" > {/*//content is of display flex column */}
                        {setOfQuestions_column_1.map((item,index)=>{
                            return <div className="helpcenter-faq-box">
                                <div className="title">{item.title}</div>
                                {item.questions.map((question,index)=>{
                                    return <div className="question">{question}
                                    </div>
                                })
                                }
                                </div>
                        })}

                        
                    </div>
                    <div className="helpcenter-faq-content" > {/*//content is of display flex column */}
                        {setOfQuestions_column_2.map((item,index)=>{
                            return <div className="helpcenter-faq-box">
                                <div className="title">{item.title}</div>
                                {item.questions.map((question,index)=>{
                                    return <div className="question">{question}
                                    </div>
                                })
                                }
                                </div>
                        })}
                    </div>
                </div>
               
            </div>
            
        </div>
    )


}