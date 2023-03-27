// Components
import { Sidebar, Navbar, Footer, Content } from './components'

const MainLayout = (): JSX.Element => (
  <div className='flex h-[100vh]'>
    <Sidebar />
    <div className='flex flex-col flex-1'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  </div>
)

export default MainLayout
