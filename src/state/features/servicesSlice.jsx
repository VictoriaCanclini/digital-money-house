import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    selectedServiceId: null,
  },
  reducers: {
    setSelectedServiceId: (state, action) => {
      state.selectedServiceId = action.payload;
    },
  },
});

export const { setSelectedServiceId } = servicesSlice.actions;
export default servicesSlice.reducer;
