// Components
import { Sidebar, Navbar, Footer, Content } from './components'

const MainLayout = (): JSX.Element => (
  <div className='flex flex-col h-[100vh]'>
    <Navbar />
    <div className='flex flex-1'>
      <Sidebar />
      <Content />
    </div>
    <Footer />
  </div>
)

export default MainLayout
