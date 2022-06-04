import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Navbar from '../components/navbar';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../features/redux/loginSlice';
import { setLogout } from '../features/redux/logoutSlice';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
} from 'react-leaflet';
import { setHouse } from '../features/redux/houseSlice';
import { blue } from '@material-ui/core/colors';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AddHouse = () => {
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
	const dispatch = useDispatch();
	const formData = new FormData();

	const [dispatchToggle, setdispatchToggle] = useState(false);

	const [formDetails, setFormDetails] = useState({
		photos: '',
		floors: '',
		rooms: '',
		monthlyRent: '',
		status: '',
		latitude: '',
		longitude: '',
		householder: authData.id,
	});
	const lableStyle = { color: '#A270B1', fontWeight: '700' };

	useEffect(() => {
		if (dispatchToggle) {
			const file = document.getElementById('photos').files[0];

			for (var key in formDetails)
				if (key != 'photos') {
					formData.append(key, formDetails[key]);
				}

			formData.append('photos', file);
			// for (var key of formData.entries()) {
			// 	console.log(key[0] + ', ' + key[1]);
			// }
			dispatch(setHouse(formData));
			setdispatchToggle(false);
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

	const addSubmitHandler = (e) => {
		var emptyTag = false;
		for (var key in formDetails) {
			if (formDetails[key] == '') emptyTag = true;
		}

		emptyTag ? handleOpen() : setdispatchToggle(true);
	};

	const MapEvents = () => {
		useMapEvents({
			click(e) {
				// setState your coords here
				// coords exist in "e.latlng.lat" and "e.latlng.lng"
				document.getElementsByName('longitude')[0].value = e.latlng.lng;
				document.getElementsByName('latitude')[0].value = e.latlng.lat;
				setFormDetails({
					...formDetails,
					latitude: e.latlng.lat,
					longitude: e.latlng.lng,
				});
			},
		});
		return false;
	};

	return (
		<>
			<div className="bodyContainer">
				<Modal open={open} onClose={handleClose}>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Invalid Details
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Please ensure that you have filled all the form fields
							appropriately.
						</Typography>
					</Box>
				</Modal>
				<Navbar active="Houses" />
				<div className="flex">
					<form className="houeAddition">
						<p>Enter The House Details</p>
						<label style={lableStyle}>No. of Floors</label>
						<input
							name="floors"
							type="number"
							placeholder="Enter The No of Floors in the House"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lableStyle}>No. of Rooms</label>
						<input
							name="rooms"
							type="number"
							placeholder="Enter The No of Rooms in the House"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Monthly Rent Amount</label>
						<input
							name="monthlyRent"
							type="number"
							placeholder="Enter The Monthly Rent Amount"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Longitude of the House</label>
						<input
							name="longitude"
							type="number"
							placeholder="Click on the Map to Set Longitude"
							className="textField"
							onChange={handleChange}
							disabled
						/>
						<label style={lableStyle}>Latitude of the House</label>
						<input
							name="latitude"
							type="number"
							placeholder="Click on the Map to Set Latitude"
							className="textField"
							onChange={handleChange}
							disabled
						/>
						<label style={lableStyle}>Select the House Status</label>
						<select
							name="status"
							list="options"
							className="textField"
							onChange={handleChange}>
							<option value="" disabled selected>
								Status Type
							</option>
							<option value="AVAILABLE">Available</option>
							<option value="INACTIVE">Inactive</option>
						</select>
						{/* <input
							name="paymentURL"
							type="text"
							placeholder="Enter The Stripe Payment URL For Your House"
							className="textField"
							onChange={handleChange}
						/> */}

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
							label="Add House"
							size="large"
							variant="secondary"
							onclick={addSubmitHandler}
						/>
					</form>

					<MapContainer
						center={[27.7172, 85.324]}
						zoom={13}
						style={{
							height: '85vh',
							width: '60vw',
							backgroundColor: '#ecf0f3',
							boxShadow: '1em 1em 1em #d1d9e6, -1em -1em 1em #ffffff90',
							borderRadius: '0.5em',
						}}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[formDetails.latitude, formDetails.longitude]}>
							<Popup>Selected house location.</Popup>
						</Marker>
						<MapEvents />
					</MapContainer>
				</div>
			</div>
		</>
	);
};

export default AddHouse;
