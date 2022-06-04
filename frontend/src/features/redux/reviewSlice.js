import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPI, postAPI, patchAPI } from '../api/api';
// import axios from "axios";

const initialState = {
	reviewRows: ['sth'],
	status: '',
};

const url = '/reviews/';

export const getReview = createAsyncThunk('review/getData', async (props) => {
	return getAPI(`${url}${props.id}/`);
});

export const getAllReview = createAsyncThunk('review/getAllData', async () => {
	return getAPI(url);
});

export const setReview = createAsyncThunk('review/setData', async (props) => {
	return postAPI(`${url}${props.id}/`, props.formData);
});

const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(getReview.fulfilled, (state, action) => {
				state.reviewRows = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getAllReview.fulfilled, (state, action) => {
				state.allReviewRows = action.payload;
				state.status = 'fulfilled';
			})
			.addCase(getReview.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(getReview.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default reviewSlice.reducer;
