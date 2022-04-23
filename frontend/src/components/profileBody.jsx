import React from 'react';
import Button from './Button';
import { blue } from '@material-ui/core/colors';
import Avatar from 'react-avatar';

const profileBody = () => {
	const handleChange = () => {};
	const addSubmitHandler = () => {};
	const lableStyle = { color: '#A270B1', fontWeight: '700' };
	return (
		<div className="body">
			{/* <span className="title">Profile</span> */}

			<div className="card" style={{ padding: '2.5em' }}>
				<Avatar
					className="topMargin"
					name="Suyogya Luitel"
					round
					style={{ marginBottom: '1em' }}
				/>
				<div className="flex">
					<form className="addition">
						<label style={lableStyle}>Full Name</label>
						<input
							name="fullName"
							type="text"
							placeholder="floors"
							className="textField"
							value="Suyogya Luitel"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Address</label>
						<input
							name="address"
							type="text"
							placeholder="floors"
							className="textField"
							value="Suyogya Luitel"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Bio</label>
						<input
							name="bio"
							type="text"
							placeholder="floors"
							className="textField"
							value="I am a developer currently. I also rent houses!!!"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Phone Number</label>
						<input
							name="phoneNumber"
							type="text"
							placeholder="floors"
							className="textField"
							value="9840308385"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Profession</label>
						<input
							name="profession"
							type="text"
							placeholder="floors"
							className="textField"
							value="Developer"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Stripe Account Number</label>
						<input
							name="stripe_acc"
							type="text"
							placeholder="floors"
							className="textField"
							value="acct_1KesmuIhLvFs3JpG"
							onChange={handleChange}
						/>
						<Button
							label="Update User"
							size="large"
							variant="primary"
							onclick={addSubmitHandler}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default profileBody;
