import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAPI, postAPI } from '../api/api';
import Store from './store';
// import { persistStore } from 'redux-persist';

// // import axios from "axios";
// const persistor = persistStore(Store);

const initialState = {
	status: '',
};

const url = '/auth/token/logout';

export const setLogout = createAsyncThunk('logout/setData', async () => {
	return postAPI(url, {});
});

const logoutSlice = createSlice({
	name: 'logout',
	initialState,
	reducer: {},
	extraReducers: (builder) => {
		builder
			.addCase(setLogout.fulfilled, (state, action) => {
				// state.auth = action.payload;
				state.status = 'fulfilled';
				localStorage.clear();
				// persistor.purge();
			})
			.addCase(setLogout.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(setLogout.rejected, (state) => {
				state.status = 'rejected';
			});
	},
});

export default logoutSlice.reducer;
