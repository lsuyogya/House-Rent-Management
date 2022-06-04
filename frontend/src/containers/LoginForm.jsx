import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../features/redux/loginSlice';
import { setLogout } from '../features/redux/logoutSlice';

const LoginForm = () => {
	const authData = useSelector((state) => state.login);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [dispatchToggle, setdispatchToggle] = useState(false);

	const [formDetails, setFormDetails] = useState({
		username: '',
		password: '',
	});

	useEffect(() => {
		localStorage.removeItem('authToken');
		localStorage.removeItem('persist:root');
		// dispatch(setLogout())
	}, []);

	useEffect(() => {
		if (dispatchToggle) {
			dispatch(setLogin(formDetails));
			setdispatchToggle(false);
		}
	}, [dispatchToggle]);

	const handleChange = (e) => {
		const value = e.target.value;
		setFormDetails({
			...formDetails,
			[e.target.name]: value,
		});
	};

	const loginSubmitHandler = (e) => {
		setdispatchToggle(true);
		// if (authData.auth===undefined && (typeof authData.auth != typeof {} )) return
		// localStorage.setItem('authToken', authData.auth.token )
	};

	return (
		<>
			<Logo />
			<form className="login">
				<p>Enter your credentials and Log in to your dashboard</p>
				<input
					name="username"
					type="email"
					placeholder="Email"
					className="textField"
					onChange={handleChange}
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					className="textField"
					onChange={handleChange}
				/>
				<div
					style={{
						display: 'flex',
						marginTop: '5px',
					}}>
					{/* <input type="checkbox" className="checkBox" name="Remember me" />
					<label className="checkBox label" >Remember me</label> */}
				</div>
				<Button
					label="Sign in"
					size="large"
					variant="outline"
					onclick={loginSubmitHandler}
				/>
				<span className="secondaryText"> Don’t have an account? </span>
				{/* <Link to="/register"> */}
				<span
					className="highlight"
					onClick={() => {
						window.location.href = '/register';
					}}>
					{' '}
					Create your account{' '}
				</span>
				{/* </Link> */}
			</form>
		</>
	);
};

export default LoginForm;
