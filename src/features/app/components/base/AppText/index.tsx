// CVA
import { cx } from 'class-variance-authority'
import { text, type IAppTextProps } from './cva'

const AppText = ({ children, intent, size, className, ...props }: IAppTextProps): JSX.Element => (
  <div className={text({ intent, size, className: cx(className) })} {...props}>{children}</div>
)

export default AppText
