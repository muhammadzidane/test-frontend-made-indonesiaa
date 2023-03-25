// React
import { memo } from 'react'
import { AppButton } from '@/features/app/components'
import { Button } from 'antd'

const TodoIndex = memo(() => (
  <div>
    <AppButton intent="secondary" size="small">njir</AppButton>
    <h1 className='todo'>TodoIndex</h1>
    <Button>Primary Button</Button>
  </div>
))

TodoIndex.displayName = 'TodoIndex'

export default TodoIndex
