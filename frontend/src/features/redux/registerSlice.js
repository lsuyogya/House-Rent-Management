import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI, postAPI } from "../api/api";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const initialState = {
	// authToken: "",
	status: "",
};



const url = "/auth/users/";

export const getRegister = createAsyncThunk("register/getData", async () => {
	return getAPI(url);
});

export const setRegister = createAsyncThunk("register/setData", async (body) => {
	return postAPI(url, body);
});

const registerSlice = createSlice({
	name: "register",
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(setRegister.fulfilled, (state, action) => {
				// state.authToken = action.payload;
				// localStorage.setItem('authToken', state.authToken)
				state.status = "fulfilled";
				state.payload = action.payload
				// const navigate = useNavigate(); 
				// window.location.href= "http://localhost:3000/login"
			})
			.addCase(setRegister.pending, (state) => {
				state.status = "pending";
			})
			.addCase(setRegister.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error;
			});
	},
});

export default registerSlice.reducer;
