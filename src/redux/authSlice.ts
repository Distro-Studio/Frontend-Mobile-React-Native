import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authState: {},
};

export const authSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
  },
});

export const {setAuthState} = authSlice.actions;
export const authReducer = authSlice.reducer;
