import React from 'react'; // ,{ useState }
import Avatar from 'react-avatar';
import Rating from '@mui/material/Rating';
import Tables from './table';
import { useSelector } from 'react-redux';
// import LineChart from './LineChart';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

function DashboardBody() {
	const accountType = useSelector((state) => state.login.type);
	const billData = useSelector((state) => state.bill.myBills);
	// billData?.map((bill, key) => ({
	// 	...bill,
	// 	total:
	// 		bill.rentAmount +
	// 		bill.electricityCost +
	// 		bill.wasteDisposalCost +
	// 		bill.waterCost,
	// 	title: `House ${bill.house.id}`,
	// }));
	// console.log('billArray', billData);

	const cardStyle = {
		padding: '1em',
		display: 'flex',
		flexWrap: 'wrap',
		gap: '0.5em',
		minWidth: 'unset',
	};
	const textCenterStyle = { justifyContent: 'center' };

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
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Houses Count{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						5{' '}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Earnings{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						500000{' '}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Earning This Month{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						4000{' '}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Bills Accepted{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						4{' '}
					</div>
				</div>

				<div className="card" style={{ padding: '1em' }}>
					<ResponsiveContainer width={1550} height={500}>
						<LineChart
							data={billData}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<XAxis
								dataKey="house.id"
								label={{
									value: 'House Number',
									position: 'bottom',
									offset: -20,
								}}
							/>
							<YAxis />
							<CartesianGrid strokeDasharray="15 15" />
							<Tooltip />
							<Legend align="left" verticalAlign="top" height={100} />
							<Line
								name="Monthly Rent Amount"
								type="monotone"
								dataKey="rentAmount"
								stroke="#8884d8"
							/>
							<Line
								name="Electricity Cost"
								type="monotone"
								dataKey="electricityCost"
								stroke="#82ca9d"
							/>
							<Line
								name="Waste Cost"
								type="monotone"
								dataKey="wasteDisposalCost"
								stroke="#EF8677"
							/>
							<Line
								name="Water Cost"
								type="monotone"
								dataKey="waterCost"
								stroke="#82b6d9"
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
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
