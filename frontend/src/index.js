import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Store from "./features/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'



const persistor = persistStore(Store)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={Store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals