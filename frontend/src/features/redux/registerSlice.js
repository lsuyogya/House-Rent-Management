import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUnauthenticatedAPI, postUnauthenticatedAPI } from '../api/api';

import { useNavigate } from 'react-router-dom';
// import axios from "axios";

const initialState = {
	// authToken: "",
	status: '',
};

const url = '/auth/users/';

export const getRegister = createAsyncThunk('register/getData', async () => {
	return getUnauthenticatedAPI(url);
});

export const setRegister = createAsyncThunk(
	'register/setData',
	async (body) => {
		return postUnauthenticatedAPI(url, body);
	}
);

const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(setRegister.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.payload = action.payload;
			})
			.addCase(setRegister.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(setRegister.rejected, (state, action) => {
				state.status = 'rejected';
				state.error = action.error;
			});
	},
});

export default registerSlice.reducer;
