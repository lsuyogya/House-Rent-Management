import React from 'react';
import Button from './Button';
import Avatar from 'react-avatar';
import { Rating } from '@mui/material';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

const ReviewBody = ({ reviewData, nav, userType }) => {
	const { state } = useLocation();
	const { house } = state;

	return (
		<div className="body">
			{reviewData.length != 0 ? (
				reviewData.map((review, key) => {
					return (
						<div className="card" style={{ padding: '1em' }}>
							{userType == 'TENANT' ? (
								<>
									<Avatar
										className="topMargin"
										name={review.tenant?.fullname}
										round
										style={{ marginBottom: '1em' }}
									/>
									<br />
									<label>{review.tenant?.fullname}</label>
								</>
							) : (
								<label className="title">Review {key + 1}</label>
							)}

							<div
								style={{
									fontSize: '0.75em',
									display: 'flex',
									justifyContent: 'space-between',
									color: '#022755',
								}}>
								<span>
									{moment(review.creationTime).format('DD-MMMM-YYYY')}
								</span>
								<span>{moment(review.creationTime).format('h:mm a')}</span>
							</div>

							<div className="rating" style={{ marginTop: '1em' }}>
								<div className="title maxWidth">Rating</div>
								<Rating
									className="horizontalCenter"
									value={review.rating}
									size="large"
									readOnly></Rating>
								{/* Plug rating value */}
							</div>
							<div className="review" style={{ marginTop: '1em' }}>
								<div className="title maxWidth">Review</div>
								<div className="blueText">{review.review}</div>

								{/* Plug rating value */}
							</div>
							{/* Plug bill details */}
						</div>
					);
				})
			) : (
				<div className="title">No Data</div>
			)}
		</div>
	);
};

export default ReviewBody;
