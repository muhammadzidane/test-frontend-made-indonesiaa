// React Router DOM
import { Outlet } from 'react-router-dom'

const Content = (): JSX.Element => (
  <div className='flex-1 bg-secondary'>
    <Outlet />
  </div>
)

export default Content
