import React from 'react';
import Navbar from '../components/navbar';
import { default as Body } from '../components/reviewBody';

const Reviews = () => {
	const reviewData = [
		{
			id: 1,
			reviewer: 'Sarthak',
			rating: 3,
			house: 2,
			review:
				'Nice and comfortable space. A little small for a family of four though.',
		},
		{
			id: 1,
			reviewer: 'Abhin',
			rating: 4,
			house: 4,
			review: 'Great place, Loved it',
		},
	];
	return (
		<div className="bodyContainer">
			<Navbar />
			<Body housesData={reviewData} />
		</div>
	);
};

export default Reviews;
