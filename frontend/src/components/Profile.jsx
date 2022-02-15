import React from "react";
import Navbar from "./navbar";
import { default as Body } from "./profileBody";

const Profile = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Profile" />
			<Body />
		</div>
	);
};

export default Profile;
