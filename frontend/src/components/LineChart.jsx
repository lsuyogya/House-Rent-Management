import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const LineChart = ({ billData }) => {
	const dateArray = billData.map(
		(bill, key) => `${moment(bill.creationDate).format('MMMM YYYY')}`
	);
	const dataset = [
		billData.map((bill, key) => ({
			label: 'label',
			data: [
				parseFloat(
					(
						parseFloat(bill.waterCost) +
						parseFloat(bill.rentAmount) +
						parseFloat(bill.wasteDisposalCost) +
						parseFloat(bill.electricityCost)
					).toString()
				),
			],
		})),
	];
	const dataset2 = [{ label: 'House1', data: [1, 2, 3, 4] }];
	const data = {
		labels: dateArray,
		datasets: dataset2,
	};
	const data2 = {
		labels: ['1', '2'],
		datasets: [
			{ label: 'lbl1', data: [1, 2] },
			{ label: 'lbl2', data: [1, 2] },
		],
	};
	return (
		<div>
			<Line data={data2}></Line>
		</div>
	);
};

export default LineChart;
