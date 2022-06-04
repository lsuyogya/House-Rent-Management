import React, { useEffect, useState } from 'react';
import Button from './Button';
import { blue } from '@material-ui/core/colors';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getMyUsers, patchUser } from '../features/redux/updateProfileSlice';

const ProfileBody = () => {
	const lableStyle = { color: '#A270B1', fontWeight: '700' };
	const formData = new FormData();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyUsers());
	}, []);
	const id = useSelector((state) => state.login.id);
	const currentProfile = useSelector((state) => state.profile.myUsers);
	const currentProfileData = currentProfile ?? { 0: [undefined] };
	console.log('currentProfileData', currentProfileData);

	const [formDetails, setFormDetails] = useState({
		fullname: '',
		address: '',
		bio: '',
		phone_number: '',
		profession: '',
		stripe_acc: '',
	});
	const [dispatchToggle, setdispatchToggle] = useState(false);

	useEffect(() => {
		if (dispatchToggle) {
			for (var key in formDetails)
				if (formDetails[key] != '') formData.append(key, formDetails[key]);

			for (var key in formData) if (formData[key] == '') formData.delete(key);

			const props = { formData: formData, id: id };
			dispatch(patchUser(props));
			setdispatchToggle(false);
			// nav('/houses'); //Nav did not refresh the page on load, window push does
			// window.location.href = '/houses';
		}
	}, [dispatchToggle]);

	const handleChange = (e) => {
		const value = e.target.value;
		setFormDetails({
			...formDetails,
			[e.target.name]: value,
		});
	};

	const updateSubmitHandler = (e) => {
		setdispatchToggle(true);
	};

	return (
		<div className="body">
			{/* <span className="title">Profile</span> */}

			<div className="card" style={{ padding: '2.5em' }}>
				<Avatar
					className="topMargin"
					name={currentProfileData[0]?.fullname}
					round
					style={{ marginBottom: '1em' }}
				/>
				<div className="flex">
					<form className="addition">
						<label style={lableStyle}>Full Name</label>
						<input
							name="fullname"
							type="text"
							className="textField"
							defaultValue={currentProfileData[0]?.fullname}
							placeholder="Enter Your Full Name"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Address</label>
						<input
							name="address"
							type="text"
							className="textField"
							defaultValue={currentProfileData[0]?.address}
							placeholder="Enter Your Address"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Bio</label>
						<input
							name="bio"
							type="text"
							placeholder="Enter A Short Bio"
							className="textField"
							defaultValue={currentProfileData[0]?.bio}
							onChange={handleChange}
						/>
						<label style={lableStyle}>Phone Number</label>
						<input
							name="phone_number"
							type="text"
							placeholder="Enter Your 10 Digit Phone Number "
							className="textField"
							defaultValue={currentProfileData[0]?.phone_number}
							onChange={handleChange}
							pattern="[0-9]{10}"
						/>
						<label style={lableStyle}>Profession</label>
						<input
							name="profession"
							type="text"
							placeholder="Enter Your Profession"
							className="textField"
							defaultValue={currentProfileData[0]?.profession}
							onChange={handleChange}
						/>
						{/* <label style={lableStyle}>Stripe Public Key</label>
						<input
							id="key"
							name="stripe_acc"
							type="text"
							placeholder="Enter Your Stripe Account Public Key"
							className="textField"
							defaultValue={currentProfileData[0]?.stripe_acc}
							onChange={handleChange}
						/> */}
						{/* <input type="checkbox" onclick={showKey} />
						<span style={{ color: 'rgb(162, 112, 177)' }}>Show Password</span> */}
						<Button
							label="Update Details"
							size="large"
							variant="primary"
							onclick={updateSubmitHandler}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfileBody;
