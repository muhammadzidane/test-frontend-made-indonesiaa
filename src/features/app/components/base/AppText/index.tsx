// CVA
import { cx } from 'class-variance-authority'
import { text, type IAppTextProps } from './cva'

const AppText: React.FC<IAppTextProps> = ({ children, intent, size, className, ...props }) => (
  <div className={text({ intent, size, className: cx(className) })} {...props}>{children}</div>
)

export default AppText
