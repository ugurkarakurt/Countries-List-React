import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: '',
  country: '',
  loading: true,
  title: '',
}

export const getCountries = createAsyncThunk('getCountries', async (url) => {
  const { data } = await axios.get(url)
  return data;
});

export const getCountry = createAsyncThunk('getCountry', async (url) => {
  const { data } = await axios.get(url);
  return data;
});

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload
    },
    title: (state, action) => {
      state.title = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload
    });
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.country = action.payload
    });
  }
})

export const { loading, title } = countrySlice.actions;
export default countrySlice.reducer
