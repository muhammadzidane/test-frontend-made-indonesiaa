// CVA
import { cx } from 'class-variance-authority'

// Components
import { AppText } from '@/features/app/components/base'

const Sidebar = (): JSX.Element => {
  return (
    <aside className={cx('basis-[240px]', 'bg-primary')}>
      <AppText>This is Imagine Dragons</AppText>
    </aside>
  )
}

export default Sidebar
