import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:null,
    userInfo:null
}


const userSlice = createSlice({
    name:'userReducer',
    initialState,
    reducers:{
        getUserLoginRequest(state,action){
            state.loading = true;
        },
        getUserLoginSuccess(state,action){
            state.loading = false;
            state.userInfo = action.payload;
        },
        getUserLoginFailure(state,action){
            state.loading = false;
            state.error = action.payload;
            state.userInfo = [];
        }
    }
})

export const UserActions = userSlice.actions;
export default userSlice;