import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { default as Body } from "../components/housesBody";
import { useDispatch, useSelector } from "react-redux";
import { getHouse } from "../features/redux/houseSlice";

const Houses = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getHouse());
	}, []);

	const housesData = useSelector((state) => state.house.houseRows);

	return (
		<div className="bodyContainer">
			<Navbar active="Houses" />
			<Body housesData={housesData} />
		</div>
	);
};

export default Houses;
