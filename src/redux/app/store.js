import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/countries/countrySlice";

export const store = configureStore({
  reducer: {
    countries: countryReducer
  }
})