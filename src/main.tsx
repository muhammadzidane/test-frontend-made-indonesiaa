// React redux + toolkit
import { Provider } from 'react-redux'

// React Router DOM
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// Plugins
import router from './plugins/router'
import { persistor, store } from './plugins/redux'
import '@/plugins/moment'

import { PersistGate } from 'redux-persist/integration/react'

// Tailwind CSS
import '@/assets/styles/tailwind/index.css'

// Ant design
import '@/assets/styles/antd/index.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
)
