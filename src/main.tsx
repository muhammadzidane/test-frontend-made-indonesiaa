// React redux + toolkit
import { Provider } from 'react-redux'

// React Router DOM
import ReactDOM from 'react-dom/client'

// Provider
import { AppProvider } from '@/features/app/components/provider'

// Plugins
import AntConfigProvider from '@/plugins/ant'
import { persistor, store } from './plugins/redux'
import '@/plugins/moment'

import { PersistGate } from 'redux-persist/integration/react'

// Tailwind CSS
import '@/assets/styles/tailwind/index.css'

// Ant design
import '@/assets/styles/antd/index.less'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AntConfigProvider>
          <AppProvider />
        </AntConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
