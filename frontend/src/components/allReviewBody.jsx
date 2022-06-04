import React, { useState } from 'react';
import Button from './Button';
import Avatar from 'react-avatar';
import { Rating } from '@mui/material';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const AllReviewBody = ({ reviewData, nav, userType }) => {
	const [reviewDataSearched, setReviewDataSearched] = useState([...reviewData]);

	// var reviewDataSearched = [...reviewData];
	const searchHandler = () => {
		const searchStr = document.getElementById('searchTF').value;
		setReviewDataSearched(
			reviewData.filter((review) => review.house == searchStr)
		);
	};
	return (
		<div className="body">
			{userType != 'HOUSEHOLDER' ? (
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					{userType != 'HOUSEHOLDER' ? (
						<div style={{}}>
							<Button
								label="Add Review"
								onclick={() => nav('/AddReview')}
								variant="secondary"
							/>
						</div>
					) : (
						<></>
					)}
					<span>
						<TextField
							disablePortal
							id="searchTF"
							options={reviewData}
							sx={{ width: 300 }}
							placeholder="Enter House Number"
							onKeyDown={(e) => {
								if (e.key === 'Enter') searchHandler();
							}}
							// renderInput={(params) => <TextField {...params} label="Movie" />}
						/>
						<button
							onClick={searchHandler}
							className="g-btn primary default"
							style={{ height: 55 }}>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									paddingLeft: '2em',
									paddingRight: '2em',
								}}>
								Search
								<SearchIcon></SearchIcon>
							</div>
						</button>
					</span>
				</div>
			) : (
				<></>
			)}

			{reviewDataSearched.length != 0 ? (
				reviewDataSearched.map((review, key) => {
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
								<span>House No {review.house}</span>
								<span>
									{moment(review.creationTime).format('DD-MMMM-YYYY')}
								</span>
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
				<div className="title">Search To View Data</div>
			)}
		</div>
	);
};

export default AllReviewBody;
