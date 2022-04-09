import { Navigate, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getAPI } from '../api/api';
import axiosInstance from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/userSlice';
import axios from 'axios';
import { getCheck } from '../redux/checkSlice';

const useAuth = () => {
	const url = '/users/checkToken/';
	const checkValidState = useSelector((state) => state.check.valid);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCheck());
	}, []);
	return checkValidState;
};

const PrivateRouter = () => {
	const isAuth = useAuth();
	return isAuth === 'true' ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
