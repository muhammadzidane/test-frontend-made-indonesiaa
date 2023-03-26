// React Router DOM
import { Outlet } from 'react-router-dom'

const Content = (): JSX.Element => (
  <div className='flex-1'>
    <Outlet />
  </div>
)

export default Content
