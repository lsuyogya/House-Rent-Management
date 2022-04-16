import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { default as Body } from '../components/mapBody';
import axiosInstance from '../features/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMarkers } from '../features/redux/houseSlice';

// const useMarkers = () => {
// 	const response = axiosInstance.get('/houses/map/').data;
// 	console.log(response);
// 	return response;
// };
const Map = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMarkers());
	}, []);
	const markers = useSelector((state) => state.house.map);
	return (
		<div className="bodyContainer">
			<Navbar active="Map" />
			<Body markers={markers} />
		</div>
	);
};

export default Map;
