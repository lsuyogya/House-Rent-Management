import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { default as Body } from '../components/housesBody';
import { useDispatch, useSelector } from 'react-redux';
import { getHouse } from '../features/redux/houseSlice';
import { useNavigate } from 'react-router-dom';

const Houses = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	useEffect(() => {
		dispatch(getHouse());
	}, []);

	const housesData = useSelector((state) => state.house.houseRows);

	return (
		<div className="bodyContainer">
			<Navbar active="Houses" />
			<Body housesData={housesData} nav={nav} />
		</div>
	);
};

export default Houses;
