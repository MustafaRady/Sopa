
import { combineReducers } from "redux";
import productsSlice from "./Products/ProductsReducer";
import userSlice from "./User/UserReducer";
import oneProductSlice from "./items/OneProductReducer";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import cartSlice, { cartActions } from "./ShoppingCart/ShoppingCartReducer";

const RootReducer = combineReducers({
    Item:oneProductSlice.reducer,
    User:userSlice.reducer  ,
    Products:productsSlice.reducer,
    OneProduct:oneProductSlice.reducer,
    ShoppingCart:cartSlice.reducer
})

export default RootReducer;