import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { default as Body } from '../components/dashboardBody';
import { useDispatch } from 'react-redux';
import { getMarkers } from '../features/redux/houseSlice';
import { getMyBills } from '../features/redux/billSlice';

function Dashboard(type) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMarkers());
		dispatch(getMyBills());
	}, []);
	return (
		<div className="bodyContainer">
			<Navbar active="Dashboard" />
			<Body />
		</div>
	);
}

export default Dashboard;
