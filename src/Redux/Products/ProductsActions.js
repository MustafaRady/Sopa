import axios from "axios";
import { ProductsActions } from "./ProductsReducer";


export const getProducts = ()=>async (dispatch)=>{
    dispatch(ProductsActions.getProductsRequest());
    try{
        const response = await axios.get("https://api.escuelajs.co/api/v1/products/?categoryId=4");
        dispatch(ProductsActions.getProductsSuccess(response.data));
    }catch(error){
        dispatch(ProductsActions.getProductsFailure(error.message()));
    }

}


