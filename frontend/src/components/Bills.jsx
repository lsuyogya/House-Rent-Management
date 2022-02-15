import React from "react";
import Navbar from "./navbar";
import { default as Body } from "./billsBody";

const Bills = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Bills" />
			<Body />
		</div>
	);
};

export default Bills;
