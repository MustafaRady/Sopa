import React, { useState } from "react";
import "./Model000.css"
import { useSelector ,useDispatch} from "react-redux";
import { getProducts } from "../../Redux/Products/ProductsActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Model000Component(){

    const [__items,setItems] = useState([]);
    const {products} = useSelector(state => state.Products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch])

    useEffect(() =>{
        setItems(products);
    },[products])

    return(
        <>
            <div className="Model000-container">
                <div className="Model000-content">
                    <div className="Model000-header">
                        <div className="Model000-header-title">
                            Explore Model000
                        </div>
                        <Link className="Model000-header-subtitle" to={"/explore"}>
                            <div >
                                Shop Now
                            </div>
                        </Link>             
                    </div>
                    <div className="Model000-card-group">
                        {__items.length!== 0 && __items.map((item,index)=>{
                            return <Link 
                                    className="Link"
                                    to={"/item/"+item.id} 
                                    >
                                        <div className="Model000-card" >
                                                <div className="Model000-card-content">
                                                    <img className="Model000-card-img" alt="" src={item.images[1]} width={200} height={200}></img>
                                                
                                                    <div className="Model000-card-content-detail-group">
                                                        <div className="Model000-card-content-name">
                                                            <div>
                                                                {item.title}
                                                            </div>
                                                        </div>
                                                        <div className="Model000-card-content-colorandprice">
                                                            <div>
                                                                {item.color}
                                                            </div>
                                                            <div>
                                                                {item.price} $
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                        </div>
                                    </Link>
                            
                        })}

                        {__items.length === 0 && <div>

                                No data available 
                            </div>}
                        
                    </div>
                </div>
               
            </div>
        
        </>
    )
}

export default Model000Component;