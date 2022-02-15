import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Houses from "./components/Houses";
import Bills from "./components/Bills";
import Analysis from "./components/Analysis";
import Profile from "./components/Profile";
import Map from "./components/Map";
function AppRouter() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="register" element={<RegisterForm />} />
					<Route path="houses" element={<Houses />} />
					<Route path="bills" element={<Bills />} />
					<Route path="analysis" element={<Analysis />} />
					<Route path="profile" element={<Profile />} />
					<Route path="map" element={<Map />} />
				</Routes>
			</Router>
		</div>
	);
}

export default AppRouter;
