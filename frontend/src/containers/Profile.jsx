import React from "react";
import Navbar from "../components/navbar";
import { default as Body } from "../components/profileBody";

const Profile = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Profile" />
			<Body />
		</div>
	);
};

export default Profile;
