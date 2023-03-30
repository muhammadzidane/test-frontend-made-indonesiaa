// React
import React, { useCallback } from 'react'

// React Router DOM
import { useNavigate } from 'react-router-dom'

// Ant
import { Button } from 'antd'

// CVA
import { button, type IAppButtonProps } from './cva'

const AppButton: React.FC<IAppButtonProps> = ({ children, navigate, className, rounded, color, ...props }) => {
  const navigateRoute = useNavigate()

  const buttonClassName = button({
    className,
    rounded,
    color
  })

  /**
   * @description Handle navigate route
   * @returns void
   */
  const onClickButton = useCallback((): void => {
    navigateRoute(navigate)
  }, [navigateRoute, navigate])

  return (
    <Button
      onClick={onClickButton}
      className={buttonClassName}
      type='default'
      {...props}
    >
      {children}
    </Button>
  )
}

export default AppButton
