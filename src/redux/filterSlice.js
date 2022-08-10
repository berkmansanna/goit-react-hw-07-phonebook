import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (_, action) => action.payload.toLowerCase(),
    reset: () => '',
  },
});

const filterReducer = filterSlice.reducer;

export const { change, reset } = filterSlice.actions;

export { filterReducer };
