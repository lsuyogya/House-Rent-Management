import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard';
import LoginForm from '../../containers/LoginForm';
import RegisterForm from '../../containers/RegisterForm';
import Houses from '../../containers/Houses';
import Bills from '../../containers/Bills';
import Analysis from '../../containers/Analysis';
import Profile from '../../containers/Profile';
import Map from '../../containers/Map';
import React from 'react';
import PrivateRouter from './PrivateRouter';
import AddHouse from '../../containers/AddHouse';
import UpdateHouse from '../../containers/UpdateHouse';
import AddBill from '../../containers/AddBill';
import UpdateBill from '../../containers/UpdateBill';
import Reviews from '../../containers/Reviews';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LoginForm />} />
				<Route path="register" element={<RegisterForm />} />
				<Route element={<PrivateRouter />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="houses" element={<Houses />} />
					<Route path="addHouse" element={<AddHouse />} />
					<Route path="updateHouse" element={<UpdateHouse />} />
					<Route path="bills" element={<Bills />} />
					<Route path="addBill" element={<AddBill />}></Route>
					<Route path="updateBill" element={<UpdateBill />} />
					<Route path="analysis" element={<Analysis />} />
					<Route path="profile" element={<Profile />} />
					<Route path="map" element={<Map />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

const NotFound = () => {
	return (
		<>
			<div>
				<h1>404 - Path Not Found</h1>
			</div>
			<div>
				<h1>Invalid Route</h1>
			</div>
		</>
	);
};

export default Router;
