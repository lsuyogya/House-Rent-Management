import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard";
import LoginForm from "../../containers/LoginForm";
import RegisterForm from "../../containers/RegisterForm";
import Houses from "../../containers/Houses";
import Bills from "../../containers/Bills";
import Analysis from "../../containers/Analysis";
import Profile from "../../containers/Profile";
import Map from "../../containers/Map";
import React from 'react'
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route element={<PrivateRouter/>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="houses" element={<Houses />} />
              <Route path="bills" element={<Bills />} />
              <Route path="analysis" element={<Analysis />} />
              <Route path="profile" element={<Profile />} />
              <Route path="map" element={<Map />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
            