import React from "react";
import { useState } from "react";
import Button from "../components/button";
import { Login as loginapi } from "./api";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

const LoginForm = () => {
	const [formDetails, setFormDetails] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setFormDetails({
			...formDetails,
			[e.target.name]: value,
		});
	};

	return (
		<>
			<Logo />
			<form className="login">
				<p>Enter your credentials and Log in to your dashboard</p>
				<input
					name="email"
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
						display: "flex",
						marginTop: "5px",
					}}
				>
					<input
						type="checkbox"
						className="checkBox"
						name="Remember me"
					/>
					<label className="checkBox label">Remember me</label>
				</div>
				<Button
					label="Sign in"
					size="large"
					variant="outline"
					onclick={(e) => loginapi(formDetails, e)}
				/>
				<span className="secondaryText"> Don’t have an account? </span>
				<Link to="/register">
					<span className="highlight"> Create your account </span>
				</Link>
			</form>
		</>
	);
};

export default LoginForm;
