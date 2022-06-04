import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { default as Body } from '../components/dashboardBody';
import { useDispatch } from 'react-redux';
import { getMarkers } from '../features/redux/houseSlice';
import { getMyBills } from '../features/redux/billSlice';
import { getMyHouses } from '../features/redux/houseSlice';

function Dashboard(type) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMarkers());
		dispatch(getMyBills());
		dispatch(getMyHouses());
	}, []);
	return (
		<div className="bodyContainer">
			<Navbar active="Dashboard" />
			<Body />
		</div>
	);
}

export default Dashboard;
