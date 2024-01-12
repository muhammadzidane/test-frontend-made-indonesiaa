// Redux toolkit
import { combineReducers } from "@reduxjs/toolkit";

// Slices
import { homeSlice } from "@/features/home/redux/slice";

const plainReducers = {
  home: homeSlice.reducer,
};

const reducers = combineReducers(plainReducers);

export { plainReducers, reducers };
