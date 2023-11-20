import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:null,
    oneProduct:null,
}


const oneProductSlice = createSlice({
    name:'oneProductSlice',
    initialState,
    reducers:{
        getOneProductsRequest(state,action){
            state.loading = true;
        },
        getOneProductsSuccess(state,action){
            state.loading = false;
            state.oneProduct = action.payload;
            console.log(state.oneProduct)
        },
        getOneProductsFailure(state,action){
            state.loading = false;
            state.error = action.payload;
            state.oneProduct = null;
        }
    }
})

export const OneProductActions = oneProductSlice.actions;
export default oneProductSlice;