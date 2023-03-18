// React Router DOM
import { RouteObject } from 'react-router-dom'

// UI
import { TodoIndex } from '../pages'

const todoRouter = (): RouteObject[] => [
  {
    path: 'todo',
    children: [
      {
        path: '',
        element: (
          <TodoIndex />
        )
      }
    ]
  }
]

export default todoRouter
