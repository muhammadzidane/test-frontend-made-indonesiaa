// Redux toolkit
import { combineReducers } from '@reduxjs/toolkit'

// Slices
import { counterSlice } from '@/features/counter/redux/slice'

const plainReducers = {
  counter: counterSlice.reducer
}

const reducers = combineReducers(plainReducers)

export { plainReducers, reducers }
