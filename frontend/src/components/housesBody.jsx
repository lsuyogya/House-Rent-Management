import React from "react";

const housesBody = ({ housesData }) => {
	housesData = housesData ?? [];
	return (
		<div className="body">
			<span className="title">House Details</span>
			{housesData.map((house) => (
				<div>
					{house.house_no} {house.householder} {house.tenant}{" "}
					{house.latitude} {house.longitude}
				</div>
			))}
			<div></div>
		</div>
	);
};

export default housesBody;
