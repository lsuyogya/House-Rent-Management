import React from "react";
import Navbar from "./navbar";
import { default as Body } from "./mapBody";

const Map = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Map" />
			<Body />
		</div>
	);
};

export default Map;
