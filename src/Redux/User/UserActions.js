import axios from "axios";
import { UserActions } from "./UserReducer";
import { useCookies } from "react-cookie";


export const login =({username,password},{navigate})=>async (dispatch)=>{
   
        dispatch(UserActions.getUserLoginRequest());

        try{
            const response = await axios.post("https://dummyjson.com/auth/login",{username,password});
           
            dispatch(UserActions.getUserLoginSuccess(response.data));

            // Save the token to local storage
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.id);


            navigate("/")
        }catch(error){
            dispatch(UserActions.getUserLoginFailure(error.message));
        }
    }

export const getUserById = (id)=>async (dispatch)=>{
    dispatch(UserActions.getUserLoginRequest());

        try{
            const response = await axios.get(`https://dummyjson.com/users/${id}`);
           
            dispatch(UserActions.getUserLoginSuccess(response.data));

        }catch(error){
            dispatch(UserActions.getUserLoginFailure(error.message));
        }
}