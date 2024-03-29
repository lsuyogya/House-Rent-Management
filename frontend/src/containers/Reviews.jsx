import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import { default as Body } from '../components/reviewBody';
import { getReview } from '../features/redux/reviewSlice';

const Reviews = () => {
	const dispatch = useDispatch();
	const { state } = useLocation();
	const { house } = state;
	const id = house.id;
	const props = { id: id };
	const nav = useNavigate();

	useEffect(() => {
		dispatch(getReview(props));
	}, []);
	const reviewData = useSelector((state) => state.review.reviewRows);
	const userType = useSelector((state) => state.login.type);

	return (
		<div className="bodyContainer">
			<Navbar />
			<Body reviewData={reviewData} nav={nav} userType={userType} />
		</div>
	);
};

export default Reviews;
