import React, {useEffect, useState} from "react";
import { ReactComponent as Icon } from "../assets/icon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { wipeLogin } from "../features/redux/loginSlice";
import { setLogout } from "../features/redux/logoutSlice";


function Navbar({ active }) {
	const dispatch = useDispatch()
	// document.getElementById(active).className.add("active");

	// const [logoutState, setLogoutState] = useState(false) 
	// useEffect(()=>{
	// 	if (logoutState){
	// 		dispatch(setLogout())
	// 		setLogoutState(false)
	// 	}
	// }, [logoutState])
	const logoutHandler = () => {
		localStorage.clear()
		dispatch(setLogout())
		// setLogoutState(true)
	}

	return (
		<div className="navbar">
			<Icon className="icon" />
			<Link to="/">
				<span>
					Dashboard
					<hr
						id="Dashboard"
						className={active === "Dashboard" ? "active" : ""}
					/>
				</span>
			</Link>
			<Link to="/houses">
				<span>
					Houses
					<hr
						id="Houses"
						className={active === "Houses" ? "active" : ""}
					/>
				</span>
			</Link>
			<Link to="/bills">
				<span>
					Bills
					<hr
						id="Bills"
						className={active === "Bills" ? "active" : ""}
					/>
				</span>
			</Link>
			<Link to="/analysis">
				<span>
					Analysis
					<hr
						id="Analysis"
						className={active === "Analysis" ? "active" : ""}
					/>
				</span>
			</Link>
			<Link to="/profile">
				<span>
					Profile
					<hr
						id="Profile"
						className={active === "Profile" ? "active" : ""}
					/>
				</span>
			</Link>
			<Link to="/map">
				<span>
					Map
					<hr id="Map" className={active === "Map" ? "active" : ""} />
				</span>
			</Link>
			<Link to="/login" onClick={logoutHandler}>
				<span>
					<hr />
					Signout
				</span>
			</Link>
		</div>
	);
}

export default Navbar;
