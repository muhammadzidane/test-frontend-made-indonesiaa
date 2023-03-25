// React Router DOM
import { type RouteObject } from 'react-router-dom'

// Pages
import { TodoIndex } from '../../todo/pages'

const routers = (): RouteObject[] => [
  {
    path: 'customer',
    children: [
      {
        path: '',
        element: <TodoIndex />
      }
    ]
  }
]

export default routers
