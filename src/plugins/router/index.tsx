// React
import React from 'react'

// React Router DOM
import { useRoutes } from 'react-router-dom'

// Routers
import homeRouter from '@/features/home/router'
import authRouter from '@/features/auth/router'

// Template components
import { MainLayout } from '@/features/app/components/template'

// Pages
import { NotFoundPage } from '@/features/app/pages'

// Get routers
const auth = authRouter()
const home = homeRouter()

const useRouter = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [...home]
    },
    {
      path: '/',
      children: [...auth]
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return routes
}

export default useRouter
