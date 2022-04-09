import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
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

const AddHouse = () => {
	const authData = useSelector((state) => state.login);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [dispatchToggle, setdispatchToggle] = useState(false);

	const [formDetails, setFormDetails] = useState({
		username: '',
		password: '',
	});

	useEffect(() => {
		if (dispatchToggle) {
			dispatch(setLogin(formDetails));
			setdispatchToggle(false);
		}
	}, [dispatchToggle]);

	const handleChange = (e) => {
		const value = e.target.value;
		setFormDetails({
			...formDetails,
			[e.target.name]: value,
		});
	};

	const loginSubmitHandler = (e) => {
		setdispatchToggle(true);
	};

	const [longLat, setlongLat] = useState({ longitide: '', latitude: '' });

	const MapEvents = () => {
		useMapEvents({
			click(e) {
				// setState your coords here
				// coords exist in "e.latlng.lat" and "e.latlng.lng"
				setlongLat({
					...longLat,
					latitude: e.latlng.lat,
					longitide: e.latlng.lng,
				});
				// setlongLat({...longLat, longitide : e.latlng.lng});
				console.log(longLat);
			},
		});
		return false;
	};

	return (
		<>
			<form className="houeAddition">
				<p>Enter The House Details</p>
				<input
					name="floors"
					type="floors"
					placeholder="floors"
					className="textField"
					onChange={handleChange}
				/>
				<input
					name="rooms"
					type="rooms"
					placeholder="Rooms"
					className="textField"
					onChange={handleChange}
				/>
				<input
					name="monthlyRent"
					type="monthlyRent"
					placeholder="Monthly Rent Amount"
					className="textField"
					onChange={handleChange}
				/>
				<input
					name="longitude"
					type="longitude"
					placeholder="Longitude"
					className="textField"
					onChange={handleChange}
					disabled
				/>
				<select
					id="status"
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

				<input
					type="file"
					id="photos"
					accept="image/*"
					onChange={handleChange}
				/>

				{/* <Button
					label="Sign in"
					size="large"
					variant="outline"
					onclick={loginSubmitHandler}
				/> */}
			</form>
			<MapContainer
				center={[27.7172, 85.324]}
				zoom={13}
				style={{ height: '50vh', width: '50vw' }}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[27.7172, 85.324]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<MapEvents />
			</MapContainer>
		</>
	);
};

export default AddHouse;
