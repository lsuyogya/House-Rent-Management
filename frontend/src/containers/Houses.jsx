import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { default as Body } from '../components/housesBody';
import { useDispatch, useSelector } from 'react-redux';
import { getMyHouses } from '../features/redux/houseSlice';
import { useNavigate } from 'react-router-dom';
import { getTenant } from '../features/redux/tenantSlice';

const Houses = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	useEffect(() => {
		dispatch(getMyHouses());
		dispatch(getTenant());
	}, []);

	const housesData = useSelector((state) => state.house.myHouses);
	const userType = useSelector((state) => state.login.type);

	return (
		<div className="bodyContainer">
			<Navbar active="Houses" />
			<Body housesData={housesData} nav={nav} userType={userType} />
		</div>
	);
};

export default Houses;
