import React, { useState } from 'react';
import Button from './Button';
import moment from 'moment';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BillsBody = ({ billsData, nav, userType }) => {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [modalData, setmodalData] = useState({ title: '', body: '' });

	const checkoutHandler = (bill) => {
		const url = bill.paymentURL;
		if (url != undefined) {
			setmodalData({
				title: 'Payment Redirection',
				body:
					'You will be redirected to the payment URL set by your householder. If you encounter any issue, please contact your householder.',
			});
			handleOpen();
			window.open(url, '_blank');
		} else {
			// alert(
			// 	'Checkout page not set.\n Please contack your householder for further details.'
			// );
			setmodalData({
				title: 'Checkout page not set',
				body: 'Please contact your householder for further details.',
			});
			handleOpen();
		}
	};

	return (
		<div className="body">
			{/* <span className="title">Bill Details</span> */}
			{/* <div> */}

			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{modalData.title}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{modalData.body}
					</Typography>
				</Box>
			</Modal>
			{userType == 'HOUSEHOLDER' ? (
				<div style={{ width: '100%', textAlign: 'right' }}>
					<Button
						label="Add Bill"
						onclick={() => nav('/addBill')}
						variant="secondary"
					/>
				</div>
			) : (
				<></>
			)}

			{billsData
				?.slice(0)
				.reverse()
				?.map((bill, index) => {
					const date2 = moment(bill.creationDate).format('Do MMMM YYYY');
					const time = moment(bill.creationDate).format(' h:mm:ss a');
					return (
						<div className="card">
							<div>
								<span className="key">Bill Number</span>
								<span className="value">{bill.id}</span>
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
									{parseFloat(bill.rentAmount?.toString())}
								</span>
							</div>
							<div>
								<span className="key">Waste Disposal Charge</span>
								<span className="value">
									{parseFloat(bill.wasteDisposalCost?.toString())}
								</span>
							</div>
							<div>
								<span className="key">Electricity Charge</span>
								<span className="value">
									{parseFloat(bill.electricityCost?.toString())}
								</span>
							</div>
							<div>
								<span className="key">Water Charge</span>
								<span className="value">
									{parseFloat(bill.waterCost?.toString())}
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

							{bill.status != 'PAID' ? (
								<div>
									<span className="key">
										{userType == 'HOUSEHOLDER' ? (
											<Button
												label="Update"
												variant="primary"
												onclick={() =>
													nav('/UpdateBill', { state: { bill } })
												}></Button>
										) : (
											<Button
												label="Pay"
												variant="primary"
												onclick={() => checkoutHandler(bill)}></Button>
										)}
									</span>
								</div>
							) : (
								<></>
							)}
						</div>
					);
				})}
			{/* </div> */}
		</div>
	);
};

export default BillsBody;
