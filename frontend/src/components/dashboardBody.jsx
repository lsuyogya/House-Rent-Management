import React from 'react'; // ,{ useState }
import Avatar from 'react-avatar';
import Rating from '@mui/material/Rating';
import Tables from './table';
import { useSelector } from 'react-redux';
import LineChart from './LineChart';

function DashboardBody() {
	const accountType = useSelector((state) => state.login.type);
	const billData = useSelector((state) => state.bill.billRows);

	if (accountType == 'HOUSEHOLDER')
		return (
			<div className="body">
				<Avatar className="topMargin" name="Suyogya Luitel" round />{' '}
				{/*Plug username state in name after redux store is initialized, add src prop for img*/}
				<div className="bio">
					<div className="title">
						Suyogya Luitel
						{/*Plug username state in name after redux store is initialized, add src prop for img*/}
					</div>
					{/*Plug bio*/}
					Laboris irure dolore et non aliqua esse. Fugiat nulla eu elit laboris
					ut nisi officia est est tempor ipsum. Do eiusmod non duis culpa
					occaecat consequat enim laboris pariatur nostrud aliquip commodo.
				</div>
				<div className="rating">
					<div className="title maxWidth">Rating</div>
					<Rating
						className="horizontalCenter"
						value="3"
						size="large"
						readOnly></Rating>{' '}
					{/*Plug rating value*/}
				</div>
				{/* <div className="maxWidth"></div> */}
				{/* <LineChart billData={billData} /> */}
				{/*Plug bill details*/}
			</div>
		);
	if (accountType == 'TENANT')
		return (
			// <div className="body">
			// 	<Avatar className="topMargin" name="TENANT" round />{" "}
			// 	{/*Plug username state in name after redux store is initialized, add src prop for img*/}
			// 	<div className="bio">
			// 		<div className="title">
			// 			Suyogya Luitel
			// 			{/*Plug username state in name after redux store is initialized, add src prop for img*/}
			// 		</div>
			// 		{/*Plug bio*/}
			// 		Laboris irure dolore et non aliqua esse. Fugiat nulla eu elit
			// 		laboris ut nisi officia est est tempor ipsum. Do eiusmod non
			// 		duis culpa occaecat consequat enim laboris pariatur nostrud
			// 		aliquip commodo.
			// 	</div>
			// 	<div className="rating">
			// 		<div className="title maxWidth">Rating</div>
			// 		<Rating
			// 			className="horizontalCenter"
			// 			value="3"
			// 			size="large"
			// 			readOnly
			// 		></Rating>{" "}
			// 		{/*Plug rating value*/}
			// 	</div>
			// 	{/* <div className="maxWidth"></div> */}
			// 	<Tables colNames={tableCols} rows={tableRows}></Tables>
			// 	{/*Plug bill details*/}
			// </div>
			<div>TENANT!!!!!!!!!!!!</div>
		);
}

export default DashboardBody;
