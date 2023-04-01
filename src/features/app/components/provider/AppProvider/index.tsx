// React
import { useEffect } from 'react'

// React Router DOM
import { useNavigate } from 'react-router-dom'

// Custom hooks
import { useAuth } from '@/features/auth/hooks'

// Plugins
import useRouter from '@/plugins/router'

const AppProvider: React.FC = () => {
  const navigate = useNavigate()
  const { authData } = useAuth()
  const routers = useRouter()

  useEffect(() => {
    if (authData.isLogin !== false) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [authData.isLogin, navigate])

  return routers
}

export default AppProvider
