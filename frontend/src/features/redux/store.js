import houseReducer from "./houseSlice";
import loginReducer from "./loginSlice";
import registerReducer from "./registerSlice";
import userReducer from "./userSlice"

import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
// import customerReducer from './customerSlice'



const appReducer = combineReducers({
		house	: houseReducer,
		register: registerReducer,
		login	: loginReducer,  
		user	: userReducer,
   });

const rootReducer = (state, action) => {
	if (action.type === 'logout/setData') {
		storage.removeItem('persist:root')
		storage.removeItem('authToken')
	  	return appReducer(undefined, action)
	}
		return appReducer(state, action)
}

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export default Store;
