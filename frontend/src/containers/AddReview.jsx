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
import moment from 'moment';
import { setReview } from '../features/redux/reviewSlice';
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
	const [modalData, setmodalData] = useState({ title: '', body: '' });

	const authData = useSelector((state) => state.login);
	const ownHouses = useSelector((state) => state.house.myHouses);
	const dispatch = useDispatch();
	const formData = new FormData();
	const lableStyle = { color: '#A270B1', fontWeight: '700' };

	const tenantList = useSelector((state) => state.tenant.tenantDetails);

	const [dispatchToggle, setdispatchToggle] = useState(false);

	const [formDetails, setFormDetails] = useState({
		rating: '',
		house: '',
		tenant: authData.id,
		review: '',
		creationTime: moment(),
	});

	useEffect(() => {
		dispatch(getTenant());
	}, []);
	useEffect(() => {
		if (dispatchToggle) {
			for (var key in formDetails) {
				if (key != 'house') {
					formData.append(key, formDetails[key]);
				}
			}

			// for (var key of formData.entries()) {
			// 	console.log(key[0] + ', ' + key[1]);
			// }
			// formData = JSON.stringify(formData);
			// dispatch(setReview(JSON.stringify(formData)));
			const props = { formData: formDetails, id: formDetails.house };
			dispatch(setReview(props));
			setdispatchToggle(false);
			window.location.href = '/houses';
		}
	}, [dispatchToggle]);

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
				<Navbar />
				<div
					className="flex card"
					style={{
						flexDirection: 'column',
						alignContent: 'cemter',
					}}>
					<p
						style={{
							...lableStyle,
							color: 'red',
							// fontWeight: '700',
							// fontSize: '1em',
							marginBottom: '2em',
						}}>
						For Authenticity's Sake Reviews cannot be edited later.
					</p>
					<form
						style={{
							maxWidth: '100%',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
						className="houeAddition">
						<label style={lableStyle}>House Numner</label>
						<input
							name="house"
							type="number"
							placeholder="Enter House Number"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Rating</label>
						<input
							name="rating"
							type="number"
							placeholder="Enter Rating here"
							className="textField"
							onChange={handleChange}
						/>
						<label style={lableStyle}>Review</label>
						<input
							name="review"
							type="text"
							placeholder="Enter Your Review Here"
							className="textField"
							onChange={handleChange}
						/>

						<Button
							label="Add Review"
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
