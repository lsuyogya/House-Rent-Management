import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Navbar from '../components/navbar';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHouse } from '../features/redux/houseSlice';
import { blue } from '@material-ui/core/colors';
import { setBill } from '../features/redux/billSlice';
import { getTenant } from '../features/redux/tenantSlice';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AddBill = () => {
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

	const authData = useSelector((state) => state.login);
	const ownHouses = useSelector((state) => state.house.myHouses);
	const dispatch = useDispatch();
	const formData = new FormData();

	const tenantList = useSelector((state) => state.tenant.tenantDetails);

	const [dispatchToggle, setdispatchToggle] = useState(false);
	const [modalData, setmodalData] = useState({ title: '', body: '' });

	const [formDetails, setFormDetails] = useState({
		electricityCost: '',
		rentAmount: '',
		wasteDisposalCost: '',
		waterCost: '',
		status: '',
		house: '',
		householder: authData.id,
		tenant: '',
	});
	useEffect(() => {
		if (
			formDetails.electricityCost != '' &&
			formDetails.wasteDisposalCost != '' &&
			formDetails.rentAmount != '' &&
			formDetails.waterCost != ''
		) {
			var sum =
				parseFloat(formDetails.electricityCost) +
				parseFloat(formDetails.wasteDisposalCost) +
				parseFloat(formDetails.waterCost) +
				parseFloat(formDetails.rentAmount);

			document.getElementById('total').value = sum;
			console.log(sum);
		}
	}, [formDetails]);
	useEffect(() => {
		dispatch(getTenant());
	}, []);
	useEffect(() => {
		if (dispatchToggle) {
			for (var key in formDetails) formData.append(key, formDetails[key]);

			dispatch(setBill(formData));
			setdispatchToggle(false);
			window.location.href = '/bills';
		}
	}, [dispatchToggle]);
	useEffect(() => {
		if (formDetails.house != '') {
			const selectedHouse = ownHouses.filter((house) => {
				console.log('ownHouse', house.id);
				console.log('formDetails.house', formDetails.house);
				return house.id == formDetails.house;
			});
			console.log('selectedHouse', selectedHouse);
			const tenantID = selectedHouse[0].tenant
				? selectedHouse[0].tenant.id
				: '';
			const monthlyRent = Math.round(
				parseFloat(selectedHouse[0].monthlyRent),
				0
			);
			console.log(typeof monthlyRent);
			setFormDetails({
				...formDetails,
				tenant: tenantID,
				rentAmount: monthlyRent,
				status: 'DUE',
			});
			document.getElementById('tenant').value = `${tenantID}`;
			document.getElementById('rentAmount').value = `${monthlyRent}`;
			document.getElementById('status').value = 'DUE';
		}
	}, [formDetails.house]);

	const handleChange = (e) => {
		setFormDetails({
			...formDetails,
			[e.target.name]: e.target.value,
		});
	};

	const addSubmitHandler = (e) => {
		var emptyTag = false;
		for (var key in formDetails) {
			if (formDetails[key] == '') {
				emptyTag = true;
				setmodalData({
					title: 'Invalid Details',
					body:
						'Please ensure that you have filled all the form fields appropriately.',
				});
				break;
			}
		}

		emptyTag ? handleOpen() : setdispatchToggle(true);
	};
	const lablestyle = { color: '#A270B1', fontWeight: '700' };
	return (
		<>
			<div className="bodyContainer">
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
				<Navbar active="Bills" />
				<div className="flex card">
					<form
						className="houeAddition"
						style={{ marginTop: 'auto', marginBottom: 'auto' }}>
						<label style={lablestyle}>Electricity Cost</label>
						<input
							name="electricityCost"
							type="number"
							placeholder="Electricity Cost"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lablestyle}>Rent Amount</label>
						<input
							name="rentAmount"
							id="rentAmount"
							type="number"
							placeholder="Monthly Rent Amount"
							className="textField"
							disabled
							onChange={handleChange}
						/>
						<label style={lablestyle}>House Number</label>
						<select name="house" className="textField" onChange={handleChange}>
							<option value="" disabled selected>
								House Number
							</option>
							{ownHouses?.map((house, key) => (
								<option value={house.id}>{house.id}</option>
							))}
						</select>
						<label style={lablestyle}>Water Cost</label>
						<input
							name="waterCost"
							type="number"
							placeholder="Water Cost"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lablestyle}>Waste Disposal Cost</label>
						<input
							name="wasteDisposalCost"
							type="number"
							placeholder="Waste Disposal Cost"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lablestyle}>Bill Status</label>
						<select
							name="status"
							id="status"
							className="textField"
							disabled
							onChange={handleChange}>
							<option value="" disabled selected>
								Bill Status
							</option>
							<option value="PAID">Paid</option>
							<option value="DUE">Due</option>
						</select>

						<label style={lablestyle}>Tenant</label>
						<select
							name="tenant"
							id="tenant"
							className="textField"
							disabled
							onChange={handleChange}>
							<option value="" disabled selected>
								Tenant
							</option>
							{tenantList.map((tenant, key) => (
								<option value={tenant.id}>
									ID : {tenant.id}, {tenant.fullname}
								</option>
							))}
						</select>

						<label style={lablestyle}>TOTAL AMOUNT</label>
						<input
							id="total"
							type="text"
							placeholder="Total amount calculated after all costs are entered"
							disabled
							className="textField"
							onChange={handleChange}
						/>

						<label style={lablestyle}>Stripe Payment URL</label>
						<input
							name="paymentURL"
							type="text"
							placeholder="Enter The Stripe Payment URL For Your House"
							className="textField"
							onChange={handleChange}
						/>

						<Button
							label="Add Bill"
							size="large"
							variant="secondary"
							onclick={addSubmitHandler}
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddBill;
