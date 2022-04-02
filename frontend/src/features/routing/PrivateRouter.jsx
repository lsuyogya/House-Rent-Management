import { Navigate, Outlet } from "react-router-dom";
import React from 'react'
import { getAPI } from "../api/api";
import axiosInstance from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userSlice";

const useAuth = () => {
    // const dispatch = useDispatch()
    // dispatch(getUser)
    const url = '/auth/users/me'

    const response = axiosInstance.get(url).data;
    // const data=response.data;
    // getAPI(url).then((result)=>{
    //     console.log(result.data)
    // })
    // const user = {loggedIn: false};
    // return user && user.loggedIn;
    // console.log("auth", data)
    // const isAuth = useSelector(state=>state.user.self)
    // return isAuth
    return response;
};

const PrivateRouter = () => {
  const isAuth = useAuth();
  console.log("isAuth",isAuth)

  return isAuth ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRouter