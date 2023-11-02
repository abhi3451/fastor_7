import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dial_code: "",
  phone: "",
  token: "",
};

const InfoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.dial_code = action.payload.dial_code;
      state.phone = action.payload.phone;
    },
    addToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { addNumber, addToken } = InfoSlice.actions;

export default InfoSlice.reducer;
