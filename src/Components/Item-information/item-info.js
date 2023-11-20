import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./item-info.css"
import RadioGroup from "../../Elements/RadioGroup/RadioGroup";
import Select from 'react-select';
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../Redux/ShoppingCart/ShoppingCartActions";
import { useNavigate } from "react-router";
import ReactModal from "react-modal";



export default function ItemInfo({item}){

  const [modalIsOpen, setIsOpen] = useState(false)
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }

    const [selectedGender,setSelectedGender] = useState(null)
    const {cart,error} = useSelector((state)=>state.ShoppingCart);
    const dispatch = useDispatch();
    const navigate=useNavigate();


    const openErrorModal=() => {
      setErrorModalIsOpen(true);
    }

    const closeErrorModal=() => {
      setErrorModalIsOpen(false);
    }
   

    const handleAddToCart =()=>{
      
      if(selectedGender !== null && selectedSize !== null){
        console.log({
          selectedGender:selectedGender,
          selectedSize:selectedSize,
        })
        dispatch(addToCart(cart,{item,selectedOptionSize: selectedGender , selectedOption: selectedSize },navigate))
        if(error===null){
          openModal()
        }
      }
      else{
        dispatch(addToCart(cart,{item,selectedOptionSize: null , selectedOption: null },navigate))
        openErrorModal()
      }
        

      
    }
  

    const options = [
      { value: 'Size 1', label: 'US 9' },
      { value: 'Size 2', label: 'US 10' },
      { value: 'Size 3', label: 'US 11' },
    ];

    const [selectedSize, setSelectedSize] = useState(null);
    
    const handleSelectChange = ({label,value}) => {
        setSelectedSize(label);
    }



    return(
        <>
                        <div className="row w-full">
                            <div className="item-information-group width-66">
                                <div>
                                    {item.title}
                                </div>
                            </div>
                            <div className="column price width-33 ">
                                {item.price} $
                            </div>
                        </div>

                        <div className="row w-full">
                          <div className="item-information-group w-full ">
                                <div className="bold" >
                                   Color: {item.color}
                                </div>
                                <div className="colors-group ">
                                    <div className="color-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g filter="url(#filter0_i_225_1200)">
                                            <circle cx="12" cy="12" r="12" fill="#A441EA"/>
                                        </g>
                                        <defs>
                                            <filter id="filter0_i_225_1200" x="0" y="-2" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_innerShadow_225_1200"/>
                                            <feOffset dy="-2"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0.15 0"/>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_225_1200"/>
                                            </filter>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="15.25" stroke="#02021D" stroke-width="1.5"/>
  <g filter="url(#filter0_i_225_1186)">
    <circle cx="16" cy="16" r="12" fill="white"/>
  </g>
  <defs>
    <filter id="filter0_i_225_1186" x="4" y="2" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_innerShadow_225_1186"/>
      <feOffset dy="-2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_225_1186"/>
    </filter>
  </defs>
</svg>
                                    </div>

                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_i_225_1195)">
    <circle cx="12" cy="12" r="12" fill="#02021D"/>
  </g>
  <defs>
    <filter id="filter0_i_225_1195" x="0" y="-2" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_innerShadow_225_1195"/>
      <feOffset dy="-2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_225_1195"/>
    </filter>
  </defs>
</svg>
                                    </div>

                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_i_225_1198)">
    <circle cx="12" cy="12" r="12" fill="#75869C"/>
  </g>
  <defs>
    <filter id="filter0_i_225_1198" x="0" y="-2" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_innerShadow_225_1198"/>
      <feOffset dy="-2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_225_1198"/>
    </filter>
  </defs>
</svg>
                                    </div>

                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_i_225_1202)">
    <circle cx="12" cy="12" r="12" fill="#C1F651"/>
  </g>
  <defs>
    <filter id="filter0_i_225_1202" x="0" y="-2" width="24" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_innerShadow_225_1202"/>
      <feOffset dy="-2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0 0.233333 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_225_1202"/>
    </filter>
  </defs>
</svg>
                                    </div>
                                </div>
                          </div>
                        </div>

                        <div className="row w-full start">
                            <div className="column w-full">
                                <div className="gender-group w-full">
                                    <div className="row w-full gap">
                                        <div className="column  start bold">
                                            Select: Gender and Size
                                        </div>
                                        <div className="column ">
                                            Size Guide
                                        </div>
                                    </div>

                                    <div className="row w-full ">
                                        <RadioGroup setSelectedOptionSize={setSelectedGender}/>
                                    </div>
                                </div>

                                <div className="row w-full dropdown">
                                <Select 
                                className="w-full"
                                onChange={handleSelectChange}
                                options={options}
                                >

                                </Select>
                                </div>

                                <div className="row w-full">
                                    <div className="add-to-bag-group">
                                        <div className="add-to-bag-button" onClick={()=>handleAddToCart()}>
                                            Add to bag
                                        </div>
                                        <div className="add-to-bag-details center">
                                            Free shipping on orders over $30 & free returns in the US
                                        </div>
                                        <div className="add-to-bag-details ">
                                        Step into a world of unparalleled
                                        comfort with Atoms' Model 000 - a
                                        timeless design that will change the 
                                        way you think about footwear. From the
                                        moment you slip them on, you'll understand
                                        why this shoe has quickly become a customer favorite,
                                        with over 100 thousand pairs sold since its debut in 2019
                                        .Experience the ultimate in everyday footwear with Atoms' Model 000.
                                        </div>
                                    </div>
                                </div>
                                <ReactModal isOpen={modalIsOpen} className="modal" contentLabel="Example Modal">
                                    <div className="modal-container">
                                      <button className="button-close" onClick={closeModal}>
                                        Close
                                      </button>
                                      <div className="modal-content-container">
                                        <p className="success-message">Congratulations! Your purchase was successful.</p>
                                        <Link to={"/shoppingCart"}>
                                          <button className="button-view-cart" >
                                            View in Cart
                                          </button>
                                        </Link>
                                      </div>
                                    </div>
                                  </ReactModal>


                                  <ReactModal isOpen={errorModalIsOpen} className="info-modal" contentLabel="Info Modal">
                                    <div className="info-modal-container">
                                      <button className="info-button-close" onClick={closeErrorModal}>
                                        Close
                                      </button>
                                      <div className="info-modal-content-container">
                                        <p className="info-message">Please fill in all required information before submitting your purchase.</p>
                                      </div>
                                    </div>
                                  </ReactModal>
                            </div>
                            
                            
                        </div>
        </>
    )
}