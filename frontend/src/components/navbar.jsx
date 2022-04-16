import React from 'react';
import { navbarData } from './navbarDataHouseHolder';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Icon } from '../assets/icon.svg';
import { useDispatch } from 'react-redux';
import { setLogout } from '../features/redux/logoutSlice';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const logoutHandler = () => {
		localStorage.clear();
		dispatch(setLogout());
	};
	return (
		<>
			<div className="navbar">
				<Icon
					className="icon"
					// onClick={() => {
					// 	nav('/');
					// }}
				/>
				{navbarData.map((val, key) => {
					return (
						<Link to={val.link}>
							<span id={window.location.pathname == val.link ? 'active' : ''}>
								<div className="icon">{val.icon}</div>
								<div className="title">{val.title}</div>
							</span>
						</Link>
					);
				})}
				<Link to="/login" onClick={logoutHandler}>
					<span>
						<div className="icon">
							<LogoutIcon />
						</div>
						<div className="title">Signout</div>
					</span>
				</Link>
			</div>
			;
		</>
	);
};

export default Navbar;
