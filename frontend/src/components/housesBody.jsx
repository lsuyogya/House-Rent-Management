import React from 'react';
import Button from './Button';

const housesBody = ({ housesData, nav }) => {
	console.log(housesData);
	return (
		<div className="body">
			{/* <span className="title">House Details</span> */}
			{/* <div> */}
			<div style={{ width: '100%', textAlign: 'right' }}>
				<Button
					label="Add House"
					onclick={() => nav('/AddHouse')}
					variant="secondary"
				/>
			</div>

			{housesData ? (
				housesData.map((house, index) => (
					<div className="card">
						<div>
							<img
								src={`http://localhost:8000${house.photos}`}
								alt="Image Load Failed"
								height="400px"></img>
						</div>
						<div>
							<span className="key">House Number</span>
							<span className="value">{house.id}</span>
							{/* <div className="index">{index + 1}</div> */}
						</div>
						<div>
							<span className="key">No of Floors</span>
							<span className="value">{house.floors}</span>
						</div>
						<div>
							<span className="key">No of rooms</span>
							<span className="value">{house.rooms}</span>
						</div>
						<div>
							<span className="key">Monthly Rent Amount</span>
							<span className="value">
								{parseFloat(house.monthlyRent.toString())}
							</span>
						</div>
						<div>
							<span className="key">House Status</span>
							<span className="value">{house.status}</span>
						</div>
						<div>
							<span className="key">Tenant</span>
							<span className="value">{house.tenant?.fullname}</span>
							{/* parseFloat(house.monthlyRent.toFixed(4)); */}
						</div>
						<div>
							<span className="key">
								<Button
									label="Update"
									variant="primary"
									onclick={() =>
										nav('/UpdateHouse', { state: { house } })
									}></Button>
							</span>
							<span className="value">
								<Button
									label="Reviews"
									variant="secondary"
									onclick={() =>
										nav('/Reviews', { state: { house } })
									}></Button>
							</span>
						</div>
					</div>
				))
			) : (
				<div> No Data</div>
			)}
			{/* </div> */}
		</div>
	);
};

export default housesBody;
