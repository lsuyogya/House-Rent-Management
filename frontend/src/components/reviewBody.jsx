import React from 'react';
import Button from './Button';
import Avatar from 'react-avatar';
import { Rating } from '@mui/material';

const reviewBody = ({ housesData, nav }) => {
	console.log(housesData);
	return (
		<div className="body">
			{housesData.map((house, key) => {
				{
					console.log('im in');
				}
				return (
					<div className="card" style={{ padding: '1em' }}>
						<Avatar
							className="topMargin"
							name={house.reviewer}
							round
							style={{ marginBottom: '1em' }}
						/>
						<br />
						<label>{house.reviewer}</label>
						{/* Plug
				username state in name after redux store is initialized, add src prop
            for img */}

						<div className="rating" style={{ marginTop: '1em' }}>
							<div className="title maxWidth">Rating</div>
							<Rating
								className="horizontalCenter"
								value="3"
								size="large"
								readOnly></Rating>
							{/* Plug rating value */}
						</div>
						<div className="rating" style={{ marginTop: '1em' }}>
							<div className="title maxWidth">Review</div>
							<div className="blueText">{house.review}</div>

							{/* Plug rating value */}
						</div>
						{/* Plug bill details */}
					</div>
				);
			})}
			))
		</div>
	);
};

export default reviewBody;
