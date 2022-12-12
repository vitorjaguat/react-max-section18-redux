import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      //properties can be updated like this, toolkit will prevent from causing side-effects on the original object, creating a new object for us.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
