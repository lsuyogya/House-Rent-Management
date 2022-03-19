import React from "react";
import Navbar from "../components/navbar";
import { default as Body } from "../components/analysisBody";

const Analysis = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Analysis" />
			<Body />
		</div>
	);
};

export default Analysis;
