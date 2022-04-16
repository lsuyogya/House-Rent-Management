import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import { default as Body } from '../components/billsBody';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBill, getMyBills } from '../features/redux/billSlice';

const Houses = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	useEffect(() => {
		dispatch(getMyBills());
	}, []);

	const housesData = useSelector((state) => state.bill.billRows);

	return (
		<div className="bodyContainer">
			<Navbar active="Bills" />
			<Body billsData={housesData} nav={nav} />
		</div>
	);
};

export default Houses;
