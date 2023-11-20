
import axios from "axios";
import { OneProductActions } from "./OneProductReducer";

export const getProductById = (id)=>async (dispatch)=>{
    dispatch(OneProductActions.getOneProductsRequest());
    try{
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        dispatch(OneProductActions.getOneProductsSuccess(response.data));
    }catch(error){
        dispatch(OneProductActions.getOneProductsFailure(error.message()));
    }
}