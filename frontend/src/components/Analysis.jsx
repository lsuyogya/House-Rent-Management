import React from "react";
import Navbar from "./navbar";
import { default as Body } from "./analysisBody";

const Analysis = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Analysis" />
			<Body />
		</div>
	);
};

export default Analysis;
