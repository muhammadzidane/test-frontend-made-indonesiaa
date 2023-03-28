// Components
import { ItemWithIcon } from './components'

const Sidebar = (): JSX.Element => {
  return (
    <aside className="basis-[240px] bg-primary px-6">
      <ItemWithIcon icon={<span>ICON</span>} active>Home</ItemWithIcon>
      <ItemWithIcon icon={<span>ICON</span>}>Search</ItemWithIcon>
    </aside>
  )
}

export default Sidebar
