import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
  name: "services",
  initialState: {
    selectedServiceId: null,
    date: "",
    invoice_value: 0,
    name: "",
  },
  reducers: {
    setSelectedServiceId: (state, action) => {
      state.selectedServiceId = action.payload;
    },
    setServicesData: (state, { payload }) => {
      const { date, invoice_value, name } = payload;
      state.date = date;
      state.invoice_value = invoice_value;
      state.name = name;
    },
  },
});

export const { setSelectedServiceId, setServicesData } = servicesSlice.actions;
export default servicesSlice.reducer;
