import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPI, postAPI, patchAPI } from '../api/api';
// import axios from "axios";

const initialState = {
	billRows: ['sth'],
	status: '',
};

const url = '/bills/';

export const getBill = createAsyncThunk('bill/getData', async () => {
	return getAPI(url);
});
export const getMyBills = createAsyncThunk('bill/getMyData', async () => {
	return getAPI(`${url}me/`);
});

export const getMarkers = createAsyncThunk('bill/getMarkers', async () => {
	return getAPI(`${url}map/`);
});

export const setBill = createAsyncThunk('bill/setData', async (body) => {
	return postAPI(url, body);
});

export const patchBill = createAsyncThunk('bill/patchData', async (props) => {
	return patchAPI(`${url}${props.id}/`, props.formData);
	// return patchAPI(`${url}${id}/`, formData);
});

const billSlice = createSlice({
	name: 'bill',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBill.fulfilled, (state, action) => {
				state.billRows = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getMarkers.fulfilled, (state, action) => {
				state.map = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getMyBills.fulfilled, (state, action) => {
				state.myBills = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getBill.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getBill.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default billSlice.reducer;
