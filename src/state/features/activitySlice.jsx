import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activities: [],
    selectedActivity: null,
  },
  reducers: {
    setActivityData: (state, { payload }) => {
      state.activities = payload; // Guarda todas las actividades
    },
    setSelectedActivityId: (state, { payload }) => {
      state.selectedActivity = payload;
    },
  },
});

export const { setActivityData, setSelectedActivityId } = activitySlice.actions;
export default activitySlice.reducer;
