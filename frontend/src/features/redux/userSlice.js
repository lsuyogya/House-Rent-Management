import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAPI, postAPI } from "../api/api";
// import axios from "axios";

const initialState = {
	status: "",
    self: '',
};

const url = "/auth/users/me/";

export const getUser = createAsyncThunk("user/getData", async () => {
	return getAPI(url);
});

// export const setUser = createAsyncThunk("user/setData", async (body) => {
// 	return postAPI(url, body);
// });

const userSlice = createSlice({
	name: "user",
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.self = action.payload;
				state.status = "fulfilled";
			})
			.addCase(getUser.pending, (state) => {
				state.status = "pending";
			})
			.addCase(getUser.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

export default userSlice.reducer;
