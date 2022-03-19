import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import LoginForm from "./containers/LoginForm";
import RegisterForm from "./containers/RegisterForm";
import Houses from "./containers/Houses";
import Bills from "./containers/Bills";
import Analysis from "./containers/Analysis";
import Profile from "./containers/Profile";
import Map from "./containers/Map";
function App() {
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

export default App;
