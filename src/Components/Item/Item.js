import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Item.css";
import Model000Details from "../../Pages/Model000Details/Model000Details";
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from "react-redux";
import ItemInfo from "../Item-information/item-info";
import { getProductById } from "../../Redux/items/OneProductActions";

export default function Item() {
    const [__item, setItem] = useState(null);  // Initialize with null
    const { id } = useParams();
    const dispatch = useDispatch();
    const { oneProduct } = useSelector(state => state.OneProduct);

    useEffect(() => {
        const fetchData =  () => {
            // Dispatch the action and wait for the result
             dispatch(getProductById(id));

        };

        fetchData();
    }, [dispatch, id]);
    console.log("Item", __item);

    useEffect(() =>{
        setItem(oneProduct);

    },[oneProduct])
    return (
        <>
          <div className="container margin-top">
            <div className="row start direction">
              <div className="column">
                <div className="grid">
                  {__item !== null && __item.images.map((photo, index) => (
                    <div key={index}>
                      <div className="image-container">
                        <img alt="" className="" src={photo}></img>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      
              <div className="column">
                {__item !== null ? (
                  <ItemInfo item={__item} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
      
            <Model000Details />
          </div>
        </>
      );
}
