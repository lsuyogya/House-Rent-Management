import React from 'react';
import { navbarData as HouseHolderNav } from './navbarDataHouseHolder';
import { navbarData as TenantNav } from './navbarDataTenant';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Icon } from '../assets/icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../features/redux/logoutSlice';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.login);
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
					onclick={() => {
						window.location.href = '/';
					}}
				/>

				{user.type == 'HOUSEHOLDER'
					? HouseHolderNav.map((val, key) => {
							return (
								<Link to={val.link}>
									<span
										id={window.location.pathname == val.link ? 'active' : ''}>
										<div className="icon">{val.icon}</div>
										<div className="title">{val.title}</div>
									</span>
								</Link>
							);
					  })
					: TenantNav.map((val, key) => {
							return (
								<Link to={val.link}>
									<span
										id={window.location.pathname == val.link ? 'active' : ''}>
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
		</>
	);
};

export default Navbar;
