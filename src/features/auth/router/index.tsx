// React Router DOM
import { type RouteObject } from 'react-router-dom'

// Pages
import { Login } from '../pages'

const authRouter = (): RouteObject[] => [
  {
    path: '',
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]

export default authRouter
