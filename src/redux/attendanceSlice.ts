import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  attendanceState: {
    in: false,
  },
};

export const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setAttendanceState: (state, action) => {
      state.attendanceState = action.payload;
    },
  },
});

export const {setAttendanceState} = attendanceSlice.actions;
export const attendanceReducer = attendanceSlice.reducer;
