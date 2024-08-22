// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formdata: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addTodoForm: (state, action) => {
      state.formdata.push(action.payload);
    },
  },
});

export const { addTodoForm } = formSlice.actions;
export default formSlice.reducer;
