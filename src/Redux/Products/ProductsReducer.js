import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:null,
    products:[]
}


const productsSlice = createSlice({
    name:'productsSlice',
    initialState,
    reducers:{
        getProductsRequest(state,action){
            state.loading = true;
        },
        getProductsSuccess(state,action){
            state.loading = false;
            state.products = action.payload;
        },
        getProductsFailure(state,action){
            state.loading = false;
            state.error = action.payload;
            state.products = [];
        }
    }
})

export const ProductsActions = productsSlice.actions;
export default productsSlice;