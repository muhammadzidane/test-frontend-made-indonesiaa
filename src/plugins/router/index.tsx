// React Router DOM
import {
  createBrowserRouter
} from 'react-router-dom'

// Routers
import homeRouter from '@/features/home/router'
import todoRouter from '@/features/todo/router'
import counterRouter from '@/features/counter/router'

// Template components
import { MainLayout } from '@/features/app/components/template'

// Get routers
const home = homeRouter()
const todo = todoRouter()
const counter = counterRouter()

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [...home, ...todo, ...counter]
  }
])

export default router
