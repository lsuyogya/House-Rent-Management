import React from "react";
import Navbar from "../components/navbar";
import { default as Body } from "../components/billsBody";

const Bills = () => {
	return (
		<div className="bodyContainer">
			<Navbar active="Bills" />
			<Body />
		</div>
	);
};

export default Bills;
