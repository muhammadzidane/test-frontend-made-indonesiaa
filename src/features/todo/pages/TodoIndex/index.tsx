import { memo } from 'react'

const TodoIndex = memo(() => {
  return <h1 className='todo'>TodoIndex</h1>
})

TodoIndex.displayName = 'TodoIndex'

export default TodoIndex
