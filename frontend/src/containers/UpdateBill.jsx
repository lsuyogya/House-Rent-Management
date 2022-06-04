import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { blue } from '@material-ui/core/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTenant } from '../features/redux/tenantSlice';
import { patchBill } from '../features/redux/billSlice';
import moment from 'moment';

const UpdateBill = () => {
	const lableStyle = { color: '#A270B1', fontWeight: '700' };

	const tenantList = useSelector((state) => state.tenant.tenantDetails);
	const dispatch = useDispatch();
	const nav = useNavigate();
	const formData = new FormData();
	const { state } = useLocation();
	const { bill } = state;
	const id = bill.id;
	console.log('tenantList', tenantList);

	const [dispatchToggle, setdispatchToggle] = useState(false);

	const [formDetails, setFormDetails] = useState({
		status: bill.status,
		paymentURL: bill.paymentURL,
	});
	useEffect(() => {
		dispatch(getTenant());
	}, []);
	useEffect(() => {
		if (dispatchToggle) {
			// for (var key in formDetails)
			// 	if (formDetails[key] != '') formData.append(key, formDetails[key]);

			const props = { formData: formDetails, id: id };
			dispatch(patchBill(props));
			setdispatchToggle(false);
			// nav('/bills'); //Nav did not refresh the page on load, window push does
			window.location.href = '/bills';
		}
	}, [dispatchToggle]);

	const handleChange = (e) => {
		setFormDetails({
			...formDetails,
			[e.target.name]: e.target.value,
		});
	};

	const updateSubmitHandler = (e) => {
		setdispatchToggle(true);
	};

	return (
		<>
			<div className="bodyContainer">
				<Navbar active="Bills" />
				<div className="flex">
					<div
						className="card"
						style={{
							height: 'auto',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-evenly',
						}}>
						<div>
							<span className="key">Bill Number</span>
							<span className="value">{bill.id}</span>
						</div>
						<div>
							<span className="key">Issue Date</span>
							<span className="value">
								{moment(bill.creationDate).format('Do MMMM YYYY')}
							</span>
						</div>
						<div>
							<span className="key">Issue Time</span>
							<span className="value">
								{moment(bill.creationDate).format(' h:mm:ss a')}
							</span>
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
					</div>

					<form className="houeAddition">
						<p
							style={{
								...lableStyle,
								color: '#022755',
								fontWeight: '700',
								fontSize: '1.25em',
								marginBottom: '3em',
							}}>
							Enter The Bill Details To be Updated
						</p>

						<label style={lableStyle}>Bill Status</label>
						<select name="status" className="textField" onChange={handleChange}>
							<option value="" disabled selected>
								Change Status
							</option>
							<option value="PAID">Paid</option>
							<option value="DUE">Due</option>
						</select>

						<label style={lableStyle}>Payment URL</label>
						<input
							name="paymentURL"
							className="textField"
							defaultValue={bill.paymentURL}
							onChange={handleChange}></input>

						<Button
							label="Update Bill"
							size="large"
							variant="secondary"
							onclick={updateSubmitHandler}
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default UpdateBill;
