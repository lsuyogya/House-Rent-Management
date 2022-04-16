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

const AddBill = () => {
	const authData = useSelector((state) => state.login);
	const ownHouses = useSelector((state) => state.house.myHouses);
	const dispatch = useDispatch();
	const formData = new FormData();

	const tenantList = useSelector((state) => state.tenant.tenantDetails);

	const [dispatchToggle, setdispatchToggle] = useState(false);

	const [formDetails, setFormDetails] = useState({
		electricityCost: '',
		rentAmount: '',
		monthlyRent: '',
		wasteDisposalCost: '',
		waterCost: '',
		status: '',
		house: '',
		householder: authData.id,
		tenant: ownHouses.id,
	});

	useEffect(() => {
		dispatch(getTenant());
	}, []);
	useEffect(() => {
		if (dispatchToggle) {
			for (var key in formDetails) formData.append(key, formDetails[key]);

			// for (var key of formData.entries()) {
			// 	console.log(key[0] + ', ' + key[1]);
			// }
			dispatch(setBill(formData));
			setdispatchToggle(false);
			window.location.href = '/bills';
		}
	}, [dispatchToggle]);

	const handleChange = (e) => {
		setFormDetails({
			...formDetails,
			[e.target.name]: e.target.value,
		});
	};

	const addSubmitHandler = (e) => {
		setdispatchToggle(true);
	};

	return (
		<>
			<div className="bodyContainer">
				<Navbar active="Bills" />
				<div className="flex">
					<form className="houeAddition">
						<p>Enter The Bill Details</p>
						<input
							name="electricityCost"
							type="number"
							placeholder="Electricity Cost"
							className="textField"
							onChange={handleChange}
						/>
						<input
							name="rentAmount"
							type="number"
							placeholder="Monthly Rent Amount"
							className="textField"
							onChange={handleChange}
						/>
						<select name="house" className="textField" onChange={handleChange}>
							<option value="" disabled selected>
								House Number
							</option>
							{ownHouses?.map((house, key) => (
								<option value={house.id}>{house.id}</option>
							))}
						</select>
						<input
							name="waterCost"
							type="number"
							placeholder="Water Cost"
							className="textField"
							onChange={handleChange}
						/>
						<input
							name="wasteDisposalCost"
							type="number"
							placeholder="Waste Disposal Cost"
							className="textField"
							onChange={handleChange}
						/>
						<select name="status" className="textField" onChange={handleChange}>
							<option value="" disabled selected>
								Bill Status
							</option>
							<option value="PAID">Paid</option>
							<option value="DUE">Due</option>
						</select>

						<select name="tenant" className="textField" onChange={handleChange}>
							<option value="" disabled selected>
								Tenant
							</option>
							{tenantList.map((tenant, key) => (
								<option value={tenant.id}>
									ID : {tenant.id}, {tenant.fullname}
								</option>
							))}
						</select>

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
