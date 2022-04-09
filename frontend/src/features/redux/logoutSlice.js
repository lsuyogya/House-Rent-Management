import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI, postAPI } from "../api/api";
// import axios from "axios";

const initialState = {
	status: "",
};

const url = "/auth/token/logout";

export const setLogout = createAsyncThunk("logout/setData", async () => {
	return postAPI(url, {});
});

const logoutSlice = createSlice({
	name: "logout",
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(setLogout.fulfilled, (state, action) => {
				// state.auth = action.payload;
				state.status = "fulfilled";
			})
			.addCase(setLogout.pending, (state) => {
				state.status = "pending";
			})
			.addCase(setLogout.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

export default logoutSlice.reducer;
