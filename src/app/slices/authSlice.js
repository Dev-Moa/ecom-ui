// src/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleIsLoggedIn: (state, action) => {
      // Use a more descriptive name for the action
      state.isLoggedIn = action.payload; // This mutates state directly due to immer
    },
  },
});

// Export the toggle action for use in components
export const { toggleIsLoggedIn } = authSlice.actions;

export default authSlice.reducer;
