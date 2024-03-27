// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const prodLtSlice = createSlice({
  name: "prodLt",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = prodLtSlice.actions;

export default prodLtSlice.reducer;

export const selectProdLt = (state) => state.prodLt;
