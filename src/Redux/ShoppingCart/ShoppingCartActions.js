import { useEffect } from "react";
import { cartActions } from "./ShoppingCartReducer"

export const addToCart = (Items, Item,navigate) => (dispatch) => {
    dispatch(cartActions.applyToCartRequest());
    console.log(Item)
    //Cannot add to cart if fields are empty
    if(Item.selectedGender === null || Item.selectedOptionSize === null){
      console.log("Dispatching error")
      dispatch(cartActions.applyToCartFailure("Please fill all the required fields"))
      return;
    }
    
    if(window.localStorage.getItem('token')){
      let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
  
      let itemAlreadyInCart = false;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].item.id === Item.item.id) {
          itemAlreadyInCart = true;
          break;
        }
      }
      

      if (!itemAlreadyInCart) {
        console.log({Item:Item})
        cart.push({
          item: Item.item,
          selectedGender:Item.selectedOptionSize,
          quantity: 1,
        });
      }
      else{
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].item.id === Item.item.id) {
            cart[i].quantity += 1;
            break;
          }
        }
        
      }
      console.log(cart);
      dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
      dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
      dispatch(cartActions.addToCartSuccess(cart));
    }
    else{
      useEffect(()=>{
        navigate("/login")
      })
    }
  };
  

export const removeFromCart=(Items,id)=>(dispatch)=>{

    let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
    
    cart = cart.filter((item)=>item.item.id!==id)
    dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
    dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
    dispatch(cartActions.removeFromCart(cart));
}

export const incrementItemInCart=(Items,id)=>(dispatch)=>{
    dispatch(cartActions.applyToCartRequest());
  
    let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
  
   
    for (let i = 0; i < cart.length; i++) {
      
      if (cart[i].item.id === id) {
        cart[i].quantity += 1;
        break;
      }
    }
    dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
    dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
    dispatch(cartActions.addToCartSuccess(cart));
}

export const decrementItemInCart=(Items,id)=>(dispatch)=>{
    dispatch(cartActions.applyToCartRequest());
  
    let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
  
  
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].item.id+"---"+id)
      if (cart[i].item.id === id && cart[i].quantity>0) {
        console.log("Incrementing item in cart")
        cart[i].quantity -= 1;
        break;
      }
    }
  
    
    dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
    dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
    dispatch(cartActions.addToCartSuccess(cart));
}

function calculateTotalPrice(cart){
  let totalPrice = 0 ; 
  for(let i = 0 ; i < cart.length ; i++){
    totalPrice += cart[i].item.price * cart[i].quantity;
  }
  return totalPrice;
}

function calculateTotalQuantity(cart){
  let totalQuantity = 0 ; 
  for(let i = 0 ; i < cart.length ; i++){
    totalQuantity += cart[i].quantity;
  }
  return totalQuantity;
}