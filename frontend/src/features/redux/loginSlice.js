import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUnauthenticatedAPI, postUnauthenticatedAPI } from '../api/api';
// import axios from "axios";

const initialState = {
	status: '',
};

const url = '/users/login/';

export const getLogin = createAsyncThunk('login/getData', async () => {
	return getUnauthenticatedAPI(url);
});

export const setLogin = createAsyncThunk('login/setData', async (body) => {
	return postUnauthenticatedAPI(url, body);
});

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(setLogin.fulfilled, (state, action) => {
				state.auth = action.payload;
				state.status = 'fulfilled';
				localStorage.setItem('authToken', action.payload.token);
				window.location.href = '/';
			})
			.addCase(setLogin.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(setLogin.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default loginSlice.reducer;
