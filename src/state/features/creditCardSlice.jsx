import { createSlice } from "@reduxjs/toolkit";

export const creditCardSlice = createSlice({
  name: "creditCard",
  initialState: {
    cards: [],
    selectedCard: null,
  },
  reducers: {
    setCreditCardData: (state, { payload }) => {
      state.cards = payload;
    },
    setSelectedCardId: (state, { payload }) => {
      state.selectedCard = payload;
    },
  },
});

export const { setCreditCardData, setSelectedCardId } = creditCardSlice.actions;
export default creditCardSlice.reducer;
