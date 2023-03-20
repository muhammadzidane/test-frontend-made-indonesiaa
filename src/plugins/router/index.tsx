// React Router DOM
import {
  createBrowserRouter
} from 'react-router-dom'

import todoRouter from '@/features/todo/router'
import counterRouter from '@/features/counter/router'

// Routers
const todo = todoRouter()
const counter = counterRouter()

const router = createBrowserRouter([
  {
    path: '/',
    children: [...todo, ...counter]
  }
])

export default router
