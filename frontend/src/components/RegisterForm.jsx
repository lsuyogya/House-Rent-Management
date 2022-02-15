import React from "react";
import { useState } from "react";
import Button from "./button";
import { Login as loginapi } from "./api";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

const LoginForm = () => {
	const [formDetails, setFormDetails] = useState({
		username: "",
		password: "",
		passwordConfirm: "",
		accountType: "",
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setFormDetails({ ...formDetails, [e.target.name]: value });
	};

	return (
		<>
			<Logo />
			<form className="login">
				<p>Enter your credentials and register now!</p>
				<input
					name="username"
					type="text"
					placeholder="Username"
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
				<input
					name="passwordConfirm"
					type="password"
					placeholder="Confirm Password"
					className="textField"
					onChange={handleChange}
				/>

				<select
					list="options"
					className="textField"
					onChange={handleChange}
				>
					<option value="" disabled selected>
						Account Type
					</option>
					<option value="Householder">Householder</option>
					<option value="Tenant">Tenant</option>
				</select>

				<label
					for="Citizenship"
					style={{ fontWeight: "bold", color: "red" }}
				>
					Upload a scanned pdf of citizenship:
				</label>
				<input type="file" id="Citizenship" accept="application/pdf" />

				{/* <div style={{ display: "flex", marginTop: "5px" }}>
          <input type="checkbox" className="checkBox" name="Remember me" />
          <label className="checkBox label">Remember me</label>
        </div> */}
				<Button
					label="Register"
					size="large"
					variant="outline"
					onclick={(e) => loginapi(formDetails, e)}
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
