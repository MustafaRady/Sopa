import React, { useEffect } from "react";
import "./RadioGroup.css"
import { useState } from "react";

export default function RadioGroup({setSelectedOptionSize}){
    const [selectedOption , setSelectedOption] = useState(null);

    const handleOnCheck = (event)=>{
        setSelectedOption(event.target.value);
    }
    


    useEffect(()=>{
        if(typeof setSelectedOptionSize === "function")
        {
            setSelectedOptionSize(selectedOption);
        }
           
    },[selectedOption])
    return(
        <>  
            <div class="mydict">
                <input className="radio__input" id="input1" type="radio" value="Women" name="Women" onClick={handleOnCheck} >
                </input>
                <label className="radio__label" for="input1">Woman</label>

                <input className="radio__input" id="input2" type="radio" value="Men" name="Men" onClick={handleOnCheck}>
                </input>
                <label className="radio__label" for="input2">Men</label>
            </div>
        </>
    );
}