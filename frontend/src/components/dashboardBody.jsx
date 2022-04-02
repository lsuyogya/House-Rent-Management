import React, { useState } from "react";
import Avatar from "react-avatar";
import Rating from "@mui/material/Rating";
import Tables from "./table";
import { useSelector } from "react-redux";

function DashboardBody() {
	const tableCols = [
		"Bill No.",
		"Amount",
		"Date",
		"House No.",
		"House Name",
		"Status",
	];
	const tableRows = [
		{
			bill_no: "1",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "2",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "3",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "4",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "5",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "6",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "7",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "8",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "9",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "10",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "11",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "12",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
		{
			bill_no: "13",
			amount: "2",
			date: "3",
			house_no: "4",
			house_name: "5",
			status: "6",
		},
	];

	const accountType = useSelector(state=>state.login.auth.type) 

 	if (accountType=="HOUSEHOLDER")	
	 return (
		<div className="body">
			<Avatar className="topMargin" name="Suyogya Luitel" round />{" "}
			{/*Plug username state in name after redux store is initialized, add src prop for img*/}
			<div className="bio">
				<div className="title">
					Suyogya Luitel
					{/*Plug username state in name after redux store is initialized, add src prop for img*/}
				</div>
				{/*Plug bio*/}
				Laboris irure dolore et non aliqua esse. Fugiat nulla eu elit
				laboris ut nisi officia est est tempor ipsum. Do eiusmod non
				duis culpa occaecat consequat enim laboris pariatur nostrud
				aliquip commodo.
			</div>
			<div className="rating">
				<div className="title maxWidth">Rating</div>
				<Rating
					className="horizontalCenter"
					value="3"
					size="large"
					readOnly
				></Rating>{" "}
				{/*Plug rating value*/}
			</div>
			{/* <div className="maxWidth"></div> */}
			<Tables colNames={tableCols} rows={tableRows}></Tables>
			{/*Plug bill details*/}
		</div>
	);
 	if (accountType=="TENANT")	return (
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
