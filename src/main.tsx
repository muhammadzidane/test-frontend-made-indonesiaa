// React
import React from 'react'

// React redux + toolkit
import { Provider } from 'react-redux'

// React Router DOM
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// Plugins
import router from './plugins/router'
import { persistor, store } from './plugins/redux'

// Tailwind CSS
import '@/assets/css/index.css'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={true} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
