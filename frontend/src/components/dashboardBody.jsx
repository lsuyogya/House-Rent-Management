import React from 'react'; // ,{ useState }
import Avatar from 'react-avatar';
import Rating from '@mui/material/Rating';
import Tables from './table';
import { useSelector } from 'react-redux';
// import LineChart from './LineChart';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function DashboardBody() {
	const accountType = useSelector((state) => state.login.type);
	const billData = useSelector((state) => state.bill.myBills);
	const billArray = []
	billData.map((bill,key)=>(billArray.push(bill)))
	console.log("billArray", billArray)
	const data = [
		{
		  "name": "House 1",
		  "uv": 4000,
		  "pv": 2400,
		  "amt": 2400
		},
		{
		  "name": "House 2",
		  "uv": 3000,
		  "pv": 1398,
		  "amt": 2210
		},
		{
		  "name": "House 3",
		  "uv": 2000,
		  "pv": 9800,
		  "amt": 2290
		},
		{
		  "name": "House 4",
		  "uv": 2780,
		  "pv": 3908,
		  "amt": 2000
		},
		
	  ]
	if (accountType == 'HOUSEHOLDER')
		return (
			<div className="body">
				{/* <Avatar className="topMargin" name="Suyogya Luitel" round />{' '} */}
				{/*Plug username state in name after redux store is initialized, add src prop for img*/}
				{/* <div className="bio"> */}
					{/* <div className="title"> */}
						{/* Suyogya Luitel */}
						{/*Plug username state in name after redux store is initialized, add src prop for img*/}
					{/* </div> */}
					{/*Plug bio*/}
					{/* Laboris irure dolore et non aliqua esse. Fugiat nulla eu elit laboris
					ut nisi officia est est tempor ipsum. Do eiusmod non duis culpa
					occaecat consequat enim laboris pariatur nostrud aliquip commodo.
				</div> */}
				{/* <div className="rating">
					<div className="title maxWidth">Rating</div>
					<Rating
						className="horizontalCenter"
						value="3"
						size="large"
						readOnly></Rating>{' '} */}
					{/*Plug rating value*/}
				{/* </div> */}
				{/* <div className="maxWidth"></div> */}
				{/* <LineChart billData={billData} /> */}
				{/*Plug bill details*/}

				{/* <LineChart width={1000} height={750} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart> */}
				<LineChart width={1000} height={750} data={billArray}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <XAxis dataKey="house" />
  <YAxis domain={[0, 50000]}/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Line name="pv of pages" type="monotone" dataKey="rentAmount" stroke="#8884d8" />
  <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
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
