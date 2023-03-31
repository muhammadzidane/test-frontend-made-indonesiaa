// Redux toolkit
import { combineReducers } from '@reduxjs/toolkit'

// Slices
import { counterSlice } from '@/features/counter/redux/slice'
import { authApi } from '@/features/auth/redux/rtk'

const plainReducers = {
  counter: counterSlice.reducer,
  [authApi.reducerPath]: authApi.reducer
}

const reducers = combineReducers(plainReducers)

export { plainReducers, reducers }
