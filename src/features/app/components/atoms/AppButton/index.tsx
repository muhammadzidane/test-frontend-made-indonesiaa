// React
import { memo } from 'react'

// CVA
import buttonCVA, { type ButtonProps } from './cva'

const AppButton = memo(({
  className,
  intent,
  size,
  ...props
}: ButtonProps) => {
  return <button className={buttonCVA({ intent, size, className })} {...props} />
})

AppButton.displayName = 'AppButton'

export default AppButton
