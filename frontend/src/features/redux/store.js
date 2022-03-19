import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./houseSlice";
// import customerReducer from './customerSlice'

const Store = configureStore({
	reducer: {
		house: houseReducer,
		//  customer: customerReducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export default Store;
