// React Router DOM
import { RouterProvider } from 'react-router-dom'

// Plugins
import router from '@/plugins/router'

const AppProvider: React.FC = () => (
  <RouterProvider router={router} />
)

export default AppProvider
