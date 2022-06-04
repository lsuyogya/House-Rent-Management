import React, { useState, useEffect } from 'react'; // ,{ useState }
import Avatar from 'react-avatar';
import Rating from '@mui/material/Rating';
import Tables from './table';
import { useDispatch, useSelector } from 'react-redux';
// import BarChart from './BarChart';
import {
	BarChart,
	LineChart,
	Line,
	Bar,
	Label,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

import TextField from '@mui/material/TextField';

function DashboardBody() {
	const dispatch = useDispatch();
	const accountType = useSelector((state) => state.login.type);
	const billData = useSelector((state) => state.bill.myBills);
	const houseData = useSelector((state) => state.house?.myHouses);
	const [value, setValue] = useState();

	const cardStyle = {
		padding: '1em',
		display: 'flex',
		flexWrap: 'wrap',
		gap: '0.5em',
		minWidth: 'unset',
	};
	const textCenterStyle = { justifyContent: 'center' };

	if (accountType == 'HOUSEHOLDER') {
		var totalAmount = billData
			?.filter((bill) => bill.status == 'PAID')
			.map((bill, index) => {
				return (
					parseFloat(bill.waterCost) +
					parseFloat(bill.rentAmount) +
					parseFloat(bill.wasteDisposalCost) +
					parseFloat(bill.electricityCost)
				);
			})
			.reduce((partialSum, x) => partialSum + x, 0);
		var billDataMonth = billData?.filter(
			(bill) =>
				moment(bill.creationDate).format('YYYY-MM') ==
					moment(value).format('YYYY-MM') && bill.status == 'PAID'
		);
		var monthAmount = billDataMonth
			?.filter((bill) => bill.status == 'PAID')
			.map((bill, index) => {
				return (
					parseFloat(bill.waterCost) +
					parseFloat(bill.rentAmount) +
					parseFloat(bill.wasteDisposalCost) +
					parseFloat(bill.electricityCost)
				);
			})
			.reduce((partialSum, x) => partialSum + x, 0);
		var billsAccepted = billData?.filter((bill) => bill.status == 'PAID')
			?.length;

		return (
			<div className="body">
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Houses Owned{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{houseData?.length}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Earnings{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{totalAmount}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Earning This Month{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{monthAmount}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Bills Accepted{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{billsAccepted}
					</div>
				</div>

				<div className="card" style={{ padding: '1em' }}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							views={['year', 'month']}
							label="Year and Month"
							minDate={new Date('2012-03-01')}
							maxDate={new Date('2023-06-01')}
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => (
								<TextField {...params} helperText={null} />
							)}
						/>
					</LocalizationProvider>
					<ResponsiveContainer width={1550} height={500}>
						<BarChart
							data={billDataMonth}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<XAxis
								dataKey="house.id"
								// label={{
								// 	value: 'House Number',
								// 	// position: 'insideTopLeft',
								// 	// position: 'insideLeft',
								// 	offset: -175,
								// }}
							/>
							<YAxis
								// domain={[0, 50000]}
								domain={[0, 'dataMax']}
								allowDataOverflow={false}
								tick={{ fontSize: 25 }}
								tickBar={false}
								tickMargin={5}
							/>
							<CartesianGrid strokeDasharray="15 15" />
							<Tooltip />
							<Legend align="left" verticalAlign="top" height={100} />
							<Bar
								name="Monthly Rent Amount"
								type="monotone"
								dataKey="rentAmount"
								fill="#8884d8"
								unit={' RS'}
							/>
							<Bar
								name="Electricity Cost"
								type="monotone"
								dataKey="electricityCost"
								fill="#82ca9d"
								unit={' RS'}
							/>
							<Bar
								name="Waste Cost"
								type="monotone"
								dataKey="wasteDisposalCost"
								fill="#EF8677"
								unit={' RS'}
							/>
							<Bar
								name="Water Cost"
								type="monotone"
								dataKey="waterCost"
								fill="#82b6d9"
								unit={' RS'}
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		);
	} else if (accountType == 'TENANT') {
		var totalAmount = billData
			?.filter((bill) => bill.status == 'PAID')
			.map((bill, index) => {
				return (
					parseFloat(bill.waterCost) +
					parseFloat(bill.rentAmount) +
					parseFloat(bill.wasteDisposalCost) +
					parseFloat(bill.electricityCost)
				);
			})
			.reduce((partialSum, x) => partialSum + x, 0);
		var billDataYear = billData?.filter(
			(bill) =>
				moment(bill.creationDate).format('YYYY') ==
					moment(value).format('YYYY') && bill.status == 'PAID'
		);
		var monthAmount = billDataYear
			?.filter((bill) => bill.status == 'PAID')
			.map((bill, index) => {
				return (
					parseFloat(bill.waterCost) +
					parseFloat(bill.rentAmount) +
					parseFloat(bill.wasteDisposalCost) +
					parseFloat(bill.electricityCost)
				);
			})
			.reduce((partialSum, x) => partialSum + x, 0);
		var billsAccepted = billData?.filter((bill) => bill.status == 'PAID')
			?.length;
		var houses = new Set();
		billData?.forEach((element) => {
			houses.add(element.house.id);
		});
		console.log(houses.size);

		return (
			<div className="body">
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Houses Leased{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{houses?.size}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Earnings{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{totalAmount}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Earning This Month{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{monthAmount}
					</div>
				</div>
				<div className="card" style={cardStyle}>
					<div className="purpleText maxWidth" style={textCenterStyle}>
						Total Bills Accepted{' '}
					</div>
					<div className="blueText maxWidth" style={textCenterStyle}>
						{billsAccepted}
					</div>
				</div>

				<div className="card" style={{ padding: '1em' }}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							views={['year']}
							label="Year"
							minDate={new Date('2012-03-01')}
							maxDate={new Date('2023-06-01')}
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => (
								<TextField {...params} helperText={null} />
							)}
						/>
					</LocalizationProvider>
					<ResponsiveContainer width={1550} height={500}>
						<BarChart
							data={billDataYear}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<XAxis dataKey="creationDate" />
							<YAxis
								domain={[0, 'dataMax']}
								allowDataOverflow={false}
								tick={{ fontSize: 25 }}
								tickBar={false}
								tickMargin={5}
							/>
							<CartesianGrid strokeDasharray="15 15" />
							<Tooltip />
							<Legend align="left" verticalAlign="top" height={100} />
							<Bar
								name="Monthly Rent Amount"
								type="monotone"
								dataKey="rentAmount"
								fill="#8884d8"
							/>
							<Bar
								name="Electricity Cost"
								type="monotone"
								dataKey="electricityCost"
								fill="#82ca9d"
							/>
							<Bar
								name="Waste Cost"
								type="monotone"
								dataKey="wasteDisposalCost"
								fill="#EF8677"
							/>
							<Bar
								name="Water Cost"
								type="monotone"
								dataKey="waterCost"
								fill="#82b6d9"
							/>
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		);
	} else {
		localStorage.clear();
		window.location.href = '/';
	}
}

export default DashboardBody;
