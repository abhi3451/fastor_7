import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./InfoSlice";
import restaurantsReducer from "./RestaurantsSlice";

const rootReducer = {
  info: infoReducer,
  restaurants: restaurantsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
