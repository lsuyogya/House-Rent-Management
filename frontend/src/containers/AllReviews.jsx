import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import { default as Body } from '../components/allReviewBody';
import { getAllReview } from '../features/redux/reviewSlice';

const AllReviews = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();

	useEffect(() => {
		dispatch(getAllReview());
	}, []);
	const reviewData = useSelector((state) => state.review.allReviewRows);
	const userType = useSelector((state) => state.login.type);

	return (
		<div className="bodyContainer">
			<Navbar />
			<Body reviewData={reviewData} nav={nav} userType={userType} />
		</div>
	);
};

export default AllReviews;
