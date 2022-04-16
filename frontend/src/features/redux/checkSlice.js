import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPI, postAPI } from '../api/api';
// import axios from "axios";

const initialState = {
	valid: '',
	status: '',
};

const url = '/users/checkToken/';

export const getCheck = createAsyncThunk('check/getData', async () => {
	return getAPI(url);
});

export const setCheck = createAsyncThunk('check/setData', async (body) => {
	return postAPI(url, body);
});

const checkSlice = createSlice({
	name: 'check',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCheck.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.valid = action.payload;
				// localStorage.setItem('check', action.payload )
			})
			.addCase(getCheck.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getCheck.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default checkSlice.reducer;
