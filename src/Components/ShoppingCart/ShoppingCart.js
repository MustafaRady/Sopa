
import React, { useEffect ,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { removeFromCart,incrementItemInCart, decrementItemInCart } from '../../Redux/ShoppingCart/ShoppingCartActions'
import "./ShoppingCart.css"
const ShoppingCart = () => {

    const dispatch =useDispatch();
    const {cart,totalPrice,totalQuantity} = useSelector((state)=>state.ShoppingCart);
    
  
    
    const handleOnAdd = (id) => {
      dispatch(incrementItemInCart(cart,id))
    };
    const handleOnSub = (id) => {
      dispatch(decrementItemInCart(cart,id))
    };
    const handleOnDelete = (id) => {
      dispatch(removeFromCart(cart,id))
  };
    
    return (
        <div className="shopping-cart">
          <h1>Shopping Cart</h1>
          <div className="cart-items">
            {cart?.length !== 0 &&  cart.map((item) =>{
            return <><div key={item.id} className="cart-item">
                    <img src={item.item.images[1]}></img>
                    <span>{item.item.title}</span>
                    <span>${item.item.price}</span>
                    <div className='icons-group'>
                      <div className='add-remove-group'>

                        <div className="more-icon" onClick={() => handleOnAdd(item.item.id)}>
                          <img src={require("./more.png")} width={"50%"} ></img>
                        </div>

                        <div >Quantity: {item.quantity}</div>

                        <div className="minus-icon" onClick={() => handleOnSub(item.item.id)}>
                          <img src={require("./minus.png")} width={"50%"} ></img>
                        </div>
                      </div>

                      

                      <div className="delete-icon" onClick={() => handleOnDelete(item.item.id)}>
                        <img src={require("./remove.png")} width={"50%"} ></img>
                      </div>
                    </div>

                    

                    
                 </div>
                
               </>
            })}
            
          </div>
          {cart?.length === 0 && <div className="empty-cart">Your cart is empty</div>}
          {cart?.length !== 0 &&
            <div className="cart-summary">
             <p>Total Items: {totalQuantity}</p>
             <p>Total Cost: ${totalPrice}</p>
            </div>
          }
         
        </div>
      );
}


export default ShoppingCart