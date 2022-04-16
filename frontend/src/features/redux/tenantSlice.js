import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPI, postAPI } from '../api/api';
// import axios from "axios";

const initialState = {
	tenantDetails: '',
	status: '',
};

const url = '/users/tenants/';

export const getTenant = createAsyncThunk('tenant/getData', async () => {
	return getAPI(url);
});

export const setTenant = createAsyncThunk('tenant/setData', async (body) => {
	return postAPI(url, body);
});

const tenantSlice = createSlice({
	name: 'tenant',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTenant.fulfilled, (state, action) => {
				state.status = 'fulfilled';
				state.tenantDetails = action.payload;
				// localStorage.setItem('tenant', action.payload )
			})
			.addCase(getTenant.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getTenant.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default tenantSlice.reducer;
