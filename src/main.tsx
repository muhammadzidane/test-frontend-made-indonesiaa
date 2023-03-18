// React
import React from 'react'

// React Router DOM
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// Plugins
import router from './plugins/router'

// Tailwind CSS
import '@/assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
