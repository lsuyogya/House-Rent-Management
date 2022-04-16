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

const AddHouse = () => {
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
		setdispatchToggle(true);
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
				<Navbar active="Houses" />
				<div className="flex">
					<form className="houeAddition">
						<p>Enter The House Details</p>
						<input
							name="floors"
							type="number"
							placeholder="floors"
							className="textField"
							onChange={handleChange}
						/>
						<input
							name="rooms"
							type="number"
							placeholder="Rooms"
							className="textField"
							onChange={handleChange}
						/>
						<input
							name="monthlyRent"
							type="number"
							placeholder="Monthly Rent Amount"
							className="textField"
							onChange={handleChange}
						/>
						<input
							name="longitude"
							type="number"
							placeholder="Longitude"
							className="textField"
							onChange={handleChange}
							disabled
						/>
						<input
							name="latitude"
							type="number"
							placeholder="Latitude"
							className="textField"
							onChange={handleChange}
							disabled
						/>
						<select
							name="status"
							list="options"
							className="textField"
							onChange={handleChange}>
							<option value="" disabled selected>
								Status Type
							</option>
							<option value="AVAILABLE">Available</option>
							<option value="OCCUPIED">Occupied</option>
							<option value="INACTIVE">Inactive</option>
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
							label="Add House"
							size="large"
							variant="secondary"
							onclick={addSubmitHandler}
						/>
					</form>
					<MapContainer
						center={[27.7172, 85.324]}
						zoom={13}
						style={{ height: '85vh', width: '60vw' }}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={[formDetails.latitude, formDetails.longitude]}>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
						<MapEvents />
					</MapContainer>
				</div>
			</div>
		</>
	);
};

export default AddHouse;
