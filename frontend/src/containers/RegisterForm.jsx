import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRegister } from '../features/redux/registerSlice';

const LoginForm = () => {
	const [formDetails, setFormDetails] = useState({
		fullname: '',
		password: '',
		type: '',
		email: '',
		phone_number: '',
		profession: '',
		citizenship: {},
		bio: '',
		// address: ""			,
		// passwordConfirm: "",
	});

	const registerData = useSelector((state) => state.register);

	const [dispatchToggle, setdispatchToggle] = useState(false);
	const dispatch = useDispatch();
	const nav = useNavigate();
	const formData = new FormData();

	useEffect(() => {
		if (dispatchToggle) {
			const file = document.getElementById('citizenship').files[0];

			for (var key in formDetails)
				if (key != 'citizenship') {
					formData.append(key, formDetails[key]);
				}

			formData.append('citizenship', file);
			dispatch(setRegister(formData));
			setdispatchToggle(false);
			localStorage.clear();
		}
	}, [dispatchToggle]);

	const handleChange = (e) => {
		if (e.target.id == 'citizenship') {
			const file = document.getElementById('citizenship').files[0];
			setFormDetails({ ...formDetails, [e.target.id]: file });
		}

		const value = e.target.value;
		setFormDetails({ ...formDetails, [e.target.id]: value });
	};

	const registerSubmitHandler = (e) => {
		// dispatch(setRegister(formData))
		setdispatchToggle(true);

		localStorage.clear();
		console.log('Status', registerData.status);
		// if (registerData.status)
	};

	if (
		registerData.payload != undefined &&
		typeof registerData.payload == typeof {}
	) {
		localStorage.clear();
		nav('/login');
	}

	return (
		<>
			<Logo />
			<form className="login">
				<p>Enter your credentials and register now!</p>
				<input
					id="fullname"
					name="fullname"
					type="text"
					placeholder="Full Name"
					className="textField"
					onChange={handleChange}
				/>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Email Address"
					className="textField"
					onChange={handleChange}
				/>
				<input
					id="bio"
					name="bio"
					type="text"
					placeholder="Short bio"
					className="textField"
					onChange={handleChange}
				/>
				<input
					id="phone_number"
					name="phoneNo"
					type="number"
					placeholder="Phone Number"
					className="textField"
					onChange={handleChange}
				/>
				<input
					id="profession"
					name="profession"
					type="text"
					placeholder="Profession"
					className="textField"
					onChange={handleChange}
				/>
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					className="textField"
					onChange={handleChange}
				/>
				<input
					id="passwordConfirm"
					name="passwordConfirm"
					type="password"
					placeholder="Confirm Password"
					className="textField"
					// onChange={handleChange}
				/>

				<select
					id="type"
					list="options"
					className="textField"
					onChange={handleChange}>
					<option value="" disabled selected>
						Account Type
					</option>
					<option value="HOUSEHOLDER">Householder</option>
					<option value="TENANT">Tenant</option>
				</select>

				<label for="citizenship" style={{ fontWeight: 'bold', color: 'red' }}>
					Upload a scanned pdf of citizenship:
				</label>
				<input
					type="file"
					id="citizenship"
					accept="application/pdf"
					onChange={handleChange}
				/>

				{/* <div style={{ display: "flex", marginTop: "5px" }}>
          <input type="checkbox" className="checkBox" name="Remember me" />
          <label className="checkBox label">Remember me</label>
        </div> */}
				<Button
					label="Register"
					size="large"
					variant="outline"
					onclick={registerSubmitHandler}
				/>
				<span className="secondaryText">Already have an account?</span>
				<Link to="/login">
					<span className="highlight"> Login to your account </span>
				</Link>
			</form>
		</>
	);
};

export default LoginForm;
