// React
import React from 'react'

// Components
import { Content, LoginSosmed, Navbar } from './components'

const Login: React.FC = () => (
  <div className='flex flex-col h-[100vh]'>
    <Navbar />
    <Content>
      <LoginSosmed />
    </Content>
  </div>
)

export default Login
