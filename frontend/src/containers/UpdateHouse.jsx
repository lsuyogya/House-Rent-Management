import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Navbar from '../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { blue } from '@material-ui/core/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTenant } from '../features/redux/tenantSlice';
import { patchHouse } from '../features/redux/houseSlice';

const UpdateHouse = () => {
	const lableStyle = { color: '#A270B1', fontWeight: '700' };

	const tenantList = useSelector((state) => state.tenant.tenantDetails);
	const dispatch = useDispatch();
	const nav = useNavigate();
	const formData = new FormData();
	const { state } = useLocation();
	const { house } = state;
	const id = house.id;

	const [dispatchToggle, setdispatchToggle] = useState(false);

	const [formDetails, setFormDetails] = useState({
		photos: '',
		monthlyRent: '',
		status: '',
		tenant: '',
	});
	useEffect(() => {
		dispatch(getTenant());
	}, []);
	useEffect(() => {
		if (dispatchToggle) {
			const file = document.getElementById('photos').files[0];

			for (var key in formDetails)
				if (key != 'photos' && formDetails[key] != '')
					formData.append(key, formDetails[key]);

			if (file != undefined) formData.append('photos', file);

			for (var key in formData) if (formData[key] == '') formData.delete(key);

			if (formDetails.status == 'AVAILABLE') formData.append('tenant', '');
			const props = { formData: formData, id: id };

			dispatch(patchHouse(props));
			setdispatchToggle(false);
			// nav('/houses'); //Nav did not refresh the page on load, window push does
			window.location.href = '/houses';
		}
	}, [dispatchToggle]);

	const handleChange = (e) => {
		if (e.target.id == 'photos') {
			const file = document.getElementById('photos').files[0];
			setFormDetails({ ...formDetails, [e.target.id]: file });
		}

		const value = e.target.value;
		setFormDetails({
			...formDetails,
			[e.target.name]: value,
		});
	};

	const updateSubmitHandler = (e) => {
		setdispatchToggle(true);
	};

	return (
		<>
			<div className="bodyContainer">
				<Navbar active="Houses" />
				<div className="flex">
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
							{/* parseFloat(house.monthlyRent.toFixed(4)); */}
						</div>
						<div>
							<span className="key">House Status</span>
							<span className="value">{house.status}</span>
						</div>
						<div>
							<span className="key">Tenant</span>
							<span className="value">{house.tenant?.fullname}</span>
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
							Enter The Details To Be Updated
						</p>
						<label style={lableStyle}>Monthly Rent Amount</label>
						<input
							name="monthlyRent"
							type="number"
							placeholder="Enter New Monthly If Necessary"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lableStyle}>House Status</label>
						<select name="status" className="textField" onChange={handleChange}>
							<option value="" disabled selected>
								Status Type
							</option>
							<option value="AVAILABLE">Available</option>
							<option value="OCCUPIED">Occupied</option>
							<option value="INACTIVE">Inactive</option>
						</select>
						<label style={lableStyle}>Tenant Occupying The House</label>
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

						<label
							htmlFor="photos"
							style={{ fontWeight: 'bold', color: 'red' }}>
							Select an image of the house
						</label>
						<input
							type="file"
							name="photos"
							id="photos"
							accept="image/*"
							onChange={handleChange}
							style={{ color: blue }}
						/>

						<Button
							label="Update House"
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

export default UpdateHouse;
