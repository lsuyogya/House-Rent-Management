import houseReducer from './houseSlice';
import loginReducer from './loginSlice';
import registerReducer from './registerSlice';
import userReducer from './userSlice';
import tenantReducer from './tenantSlice';
import logoutReducer from './logoutSlice';
import checkReducer from './checkSlice';
import billReducer from './billSlice';
import profileReducer from './updateProfileSlice';
import reviewReducer from './reviewSlice';

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
// import customerReducer from './customerSlice'

const appReducer = combineReducers({
	house: houseReducer,
	register: registerReducer,
	login: loginReducer,
	user: userReducer,
	tenant: tenantReducer,
	logout: logoutReducer,
	check: checkReducer,
	bill: billReducer,
	profile: profileReducer,
	review: reviewReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer)
const persistedReducer = persistReducer(persistConfig, appReducer);

const Store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
});

export default Store;
