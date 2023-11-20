import { useDispatch, useSelector } from "react-redux";
import Details from "../../Components/Details/Details"
import Header from "../../Components/Header/Header"
import Intro from "../../Components/Intro/Intro"
import Model000Component from "../Model000/Model000";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getUserById } from "../../Redux/User/UserActions";

function Body() {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state=>state.User);
  const navigate = useNavigate();

  useEffect(()=>{
    console.log("Calling useEffect");
    console.log(window.localStorage.getItem)
    if(window.localStorage.getItem('userId') === null){
      console.log("User is not logged in")
      navigate("/login");
    }
    else{
      if(userInfo === null)
        dispatch(getUserById(localStorage.userId))
    }
  },[])
  

  

  return (
    <>
    <Header></Header>
    <Model000Component></Model000Component>
    <Intro></Intro>
    <Details></Details>
    </>
  );
}

export default Body;
