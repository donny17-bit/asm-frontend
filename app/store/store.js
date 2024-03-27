"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import prodLtReducer from "./reducer/prodLtReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    prodLt: prodLtReducer,
  },
});

export default store;
