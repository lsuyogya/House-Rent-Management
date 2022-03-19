import React from "react";
import Navbar from "../components/navbar";
import { default as Body } from "../components/dashboardBody";

function Dashboard() {
	return (
		<div className="bodyContainer">
			<Navbar active="Dashboard" />
			<Body />
		</div>
	);
}

export default Dashboard;
