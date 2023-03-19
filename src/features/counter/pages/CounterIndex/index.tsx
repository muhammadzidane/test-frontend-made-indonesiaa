import React from 'react'
import { useAppDispatch, useAppSelector } from '@/features/app/hooks'
import { increment, decrement } from '../../redux/slice'

const CounterIndex = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>COUNTER INDEX</div>
      <div className='my-5'>{count}</div>
      <div className='flex gap-5'>
        <button type='button'>Tambah</button>
        <button type='button'>Kurang</button>
      </div>
    </div>
  )
}

export default CounterIndex