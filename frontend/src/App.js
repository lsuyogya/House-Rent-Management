import Router from "./features/routing/Router";

function App() {
	return (
		<div className="App">
			{/* <Router>
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
			</Router> */}
			<Router/>
		</div>
	);
}

export default App;
