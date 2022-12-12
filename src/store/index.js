// import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterReducer from './counter';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSlice.reducer },
  //'reducer' will "merge" all reducer functions into one big function, with cases.
});

export default store;
