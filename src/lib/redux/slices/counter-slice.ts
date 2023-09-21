import { RootState } from '@redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.value += 1;
    },
    decrementCounter: (state) => {
      state.value -= 1;
    },
    incrementCounterByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  incrementCounterByAmount,
  resetCounter,
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
