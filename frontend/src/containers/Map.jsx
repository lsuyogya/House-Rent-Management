import React from "react";
import Navbar from "../components/navbar";
import { default as Body } from "../components/mapBody";

const Map = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Map" />
			<Body />
		</div>
	);
};

export default Map;
