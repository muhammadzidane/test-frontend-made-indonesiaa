// React Router DOM
import {
  createBrowserRouter
} from 'react-router-dom'

// Routers
import homeRouter from '@/features/home/router'
import authRouter from '@/features/auth/router'
import todoRouter from '@/features/todo/router'
import counterRouter from '@/features/counter/router'

// Template components
import { MainLayout } from '@/features/app/components/template'

// Pages
import { NotFoundPage } from '@/features/app/pages'

// Get routers
const home = homeRouter()
const auth = authRouter()
const todo = todoRouter()
const counter = counterRouter()

const router = createBrowserRouter([
  {
    path: '/',
    children: [...auth]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [...home, ...auth, ...todo, ...counter]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

export default router
