import { createSlice } from "@reduxjs/toolkit";

const initialState = { restData: [] };

const RestaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.restData = action.payload;
    },
  },
});

export const { addData } = RestaurantsSlice.actions;

export default RestaurantsSlice.reducer;
