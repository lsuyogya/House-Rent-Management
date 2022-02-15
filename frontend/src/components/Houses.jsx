import React from "react";
import Navbar from "./navbar";
import { default as Body } from "./housesBody";

const Houses = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Houses" />
			<Body />
		</div>
	);
};

export default Houses;
