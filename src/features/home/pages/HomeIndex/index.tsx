// React
import { useCallback } from 'react'

// Components
import { AppButton } from '@/features/app/components/base'

// Redux slice
import { authLogout } from '@/features/auth/redux/slice'

// Custom hooks
import { useAppDispatch } from '@/features/app/hooks'

// Utils
import { modalConfirm } from '@/features/app/utils'

const HomeIndex: React.FC = () => {
  const dispatch = useAppDispatch()

  const onClickLogout = useCallback(() => {
    modalConfirm('info', {
      onOk: () => {
        dispatch(authLogout())
      }
    })
  }, [dispatch])

  return (
    <>
      <AppButton onClick={onClickLogout} color='facebook'>Logout</AppButton>
    </>
  )
}

export default HomeIndex
