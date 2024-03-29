import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPI, postAPI, patchAPI } from '../api/api';
// import axios from "axios";

const initialState = {
	houseRows: ['sth'],
	status: '',
};

const url = '/houses/';

export const getHouse = createAsyncThunk('house/getData', async () => {
	return getAPI(url);
});
export const getMyHouses = createAsyncThunk('house/getMyData', async () => {
	return getAPI(`${url}me/`);
});

export const getMarkers = createAsyncThunk('house/getMarkers', async () => {
	return getAPI(`${url}map/`);
});

export const setHouse = createAsyncThunk('house/setData', async (body) => {
	return postAPI(url, body);
});

export const patchHouse = createAsyncThunk('house/patchData', async (props) => {
	return patchAPI(`${url}${props.id}/`, props.formData);
	// return patchAPI(`${url}${id}/`, formData);
});

const houseSlice = createSlice({
	name: 'house',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getHouse.fulfilled, (state, action) => {
				state.houseRows = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getMarkers.fulfilled, (state, action) => {
				state.map = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getMyHouses.fulfilled, (state, action) => {
				state.myHouses = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getHouse.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getHouse.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default houseSlice.reducer;
