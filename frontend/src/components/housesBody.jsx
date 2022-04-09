import React from "react";
import Button from "./Button";

const housesBody = ({ housesData, nav }) => {
	housesData = housesData ?? [];
	return (
		<div className="body">
			<span className="title">House Details</span>
			{housesData==[]? 
				housesData.map((house) => (
					<div>
						{house.house_no} {house.householder} {house.tenant}{" "}
						{house.latitude} {house.longitude}
					</div>
			)):
				<div> No Data</div>
			}
			<Button label="Add House" onclick={nav("/AddHouse")} variant="secondary"/>
		</div>
	);
};

export default housesBody;
