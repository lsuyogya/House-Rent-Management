import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI, postAPI } from "../api/api";
// import axios from "axios";

const initialState = {
	houseRows: ["sth"],
	status: "",
};

const url = "/houses/";

export const getHouse = createAsyncThunk("house/getData", async () => {
	return getAPI(url);
});

export const setHouse = createAsyncThunk("house/getData", async ({ body }) => {
	return postAPI(url, body);
});

const houseSlice = createSlice({
	name: "house",
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getHouse.fulfilled, (state, action) => {
				state.houseRows = action.payload;
				state.status = "fulfilled";
			})
			.addCase(getHouse.pending, (state) => {
				state.status = "pending";
			})
			.addCase(getHouse.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

export default houseSlice.reducer;
