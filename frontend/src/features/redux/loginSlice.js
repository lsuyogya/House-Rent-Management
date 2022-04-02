import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI, postAPI } from "../api/api";
// import axios from "axios";

const initialState = {
	status: "",
};

const url = "/users/login/";

export const getLogin = createAsyncThunk("login/getData", async () => {
	return getAPI(url);
});

export const setLogin = createAsyncThunk("login/setData", async (body) => {
	return postAPI(url, body);
});

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getLogin.fulfilled, (state, action) => {
				state.auth = action.payload;
				state.status = "fulfilled";
			})
			.addCase(getLogin.pending, (state) => {
				state.status = "pending";
			})
			.addCase(getLogin.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

export default loginSlice.reducer;
