// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { type IHomeState } from "../interfaces";

const initialState: IHomeState = {
  currentStep: 0,
  answers: [],
  limit: {
    minutes: 4,
    seconds: 0,
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homeSetCurrentStep: (state, { payload }) => {
      state.currentStep = payload;
    },
    homeSetAnswer: (state, { payload }) => {
      const deletedAnswer = state.answers.filter(
        (answer) => answer.id !== payload.id
      );
      state.answers = [...deletedAnswer, payload];
    },
    homeSetLimitSeconds: (state, { payload }) => {
      state.limit = {
        seconds: payload,
        minutes: state.limit.minutes,
      };
    },
    homeSetLimitMinutes: (state, { payload }) => {
      state.limit = {
        seconds: state.limit.seconds,
        minutes: payload,
      };
    },
    homeResetLimit: (state) => {
      state.limit = initialState.limit;
    },
    homeResetAll: (state) => {
      state.currentStep = initialState.currentStep;
      state.answers = initialState.answers;
      state.limit = initialState.limit;
    },
  },
});

export const {
  homeSetCurrentStep,
  homeSetAnswer,
  homeSetLimitSeconds,
  homeSetLimitMinutes,
  homeResetLimit,
  homeResetAll,
} = homeSlice.actions;

export default homeSlice.reducer;
