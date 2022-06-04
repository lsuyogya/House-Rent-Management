import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPI, postAPI, patchAPI } from '../api/api';
// import axios from "axios";

const initialState = {
	userRows: ['sth'],
	status: '',
};

const url = '/users/';

export const getUser = createAsyncThunk('user/getData', async () => {
	return getAPI(url);
});
export const getMyUsers = createAsyncThunk('user/getMyData', async () => {
	return getAPI(`${url}me/`);
});

export const getMarkers = createAsyncThunk('user/getMarkers', async () => {
	return getAPI(`${url}map/`);
});

export const setUser = createAsyncThunk('user/setData', async (body) => {
	return postAPI(url, body);
});

export const patchUser = createAsyncThunk('user/patchData', async (props) => {
	return patchAPI(`${url}${props.id}/`, props.formData);
	// return patchAPI(`${url}${id}/`, formData);
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.userRows = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getMarkers.fulfilled, (state, action) => {
				state.map = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getMyUsers.fulfilled, (state, action) => {
				state.myUsers = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getUser.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getUser.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default userSlice.reducer;
