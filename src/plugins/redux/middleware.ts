// Redux toolkit
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'

// Ant
import { notification } from 'antd'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.log(action)
      notification.error({
        message: 'Error',
        description: action.payload.data.message || 'Tejadi kesalahan'
      })
    }

    return next(action)
  }
