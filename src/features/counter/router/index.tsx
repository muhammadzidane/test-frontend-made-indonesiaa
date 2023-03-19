// React Router DOM
import { RouteObject } from 'react-router-dom'

// UI
import { CounterIndex } from '../pages'

const counterRouter = (): RouteObject[] => [
  {
    path: 'counter',
    children: [
      {
        path: '',
        element: (
          <CounterIndex />
        )
      }
    ]
  }
]

export default counterRouter
