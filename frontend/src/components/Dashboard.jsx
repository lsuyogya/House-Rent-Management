import React from "react";
import Navbar from "./navbar";
import { default as Body } from "./dashboardBody";

function Dashboard() {
	return (
		<div className="bodyContainer">
			<Navbar active="Dashboard" />
			<Body />
		</div>
	);
}

export default Dashboard;
