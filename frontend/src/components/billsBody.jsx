import React from 'react';
import Button from './Button';
import moment from 'moment';

const billsBody = ({ billsData, nav }) => {
	return (
		<div className="body">
			{/* <span className="title">Bill Details</span> */}
			{/* <div> */}
			<div style={{ width: '100%', textAlign: 'right' }}>
				<Button
					label="Add Bill"
					onclick={() => nav('/addBill')}
					variant="secondary"
				/>
			</div>

			{billsData
				?.slice(0)
				.reverse()
				?.map((bill, index) => {
					const date2 = moment(bill.creationDate).format('Do MMMM YYYY');
					const time = moment(bill.creationDate).format(' h:mm:ss a');
					return (
						<div className="card">
							{/* <div>
						<img
							src={`http://localhost:8000${bill.photos}`}
							alt="Image Load Failed"
							height="400px"></img>
					</div> */}
							{/* {Date(bill.creationDate).get} */}
							<div>
								<span className="key">Bill Number</span>
								<span className="value">{bill.id}</span>
								{/* <div className="index">{index + 1}</div> */}
							</div>
							<div>
								<span className="key">Issue Date</span>
								<span className="value">{date2}</span>
							</div>
							<div>
								<span className="key">Issue Time</span>
								<span className="value">{time}</span>
							</div>
							<div>
								<span className="key">House Number</span>
								<span className="value">{bill.house.id}</span>
							</div>
							<div>
								<span className="key">Tenant</span>
								<span className="value">{bill.tenant?.fullname}</span>
							</div>
							<div>
								<span className="key">Status</span>
								<span className="value">{bill.status}</span>
							</div>
							<div>
								<span className="key">Monthly Rent Amount</span>
								<span className="value">
									{parseFloat(bill.rentAmount.toString())}
								</span>
							</div>
							<div>
								<span className="key">Waste Disposal Charge</span>
								<span className="value">
									{parseFloat(bill.wasteDisposalCost.toString())}
								</span>
							</div>
							<div>
								<span className="key">Electricity Charge</span>
								<span className="value">
									{parseFloat(bill.electricityCost.toString())}
								</span>
							</div>
							<div>
								<span className="key">Water Charge</span>
								<span className="value">
									{parseFloat(bill.waterCost.toString())}
								</span>
							</div>
							<hr
								style={{
									width: '80%',
									marginLeft: 'auto',
								}}></hr>
							<div>
								<span className="key">Total Charge</span>
								<span className="value">
									{parseFloat(
										(
											parseFloat(bill.waterCost) +
											parseFloat(bill.rentAmount) +
											parseFloat(bill.wasteDisposalCost) +
											parseFloat(bill.electricityCost)
										).toString()
									)}
								</span>
							</div>
							{/* <div>
						<span className="key">Householder</span>
						<span className="value">{bill.householder?.fullname}</span>
					</div> */}
							<div>
								<span className="key">
									<Button
										label="Update"
										variant="primary"
										onclick={() =>
											nav('/UpdateBill', { state: { bill } })
										}></Button>
								</span>
							</div>
						</div>
					);
				})}
			{/* </div> */}
		</div>
	);
};

export default billsBody;
