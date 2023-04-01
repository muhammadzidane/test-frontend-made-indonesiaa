// Redux toolkit
import { combineReducers } from '@reduxjs/toolkit'

// Slices
import { authSlice } from '@/features/auth/redux/slice'

// RTK
import { authApi } from '@/features/auth/redux/rtk'

const plainReducers = {
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer
}

const reducers = combineReducers(plainReducers)

export { plainReducers, reducers }
