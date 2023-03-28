// Components
import { AppText } from '@/features/app/components/base'

// Interfaces
import { type IItemWithIconProps } from './interfaces'

const ItemWithIcon = ({ children, icon, active }: IItemWithIconProps): JSX.Element => {
  const activeClass = `font-semibold ${active ? 'text-white-1' : ''}`

  return (
    <div className='flex gap-4'>
      <div>{icon}</div>
      <AppText className={activeClass}>{children}</AppText>
    </div>
  )
}

export default ItemWithIcon
