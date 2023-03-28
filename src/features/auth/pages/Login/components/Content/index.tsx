// Interfaces
import { type IContentProps } from './interfaces'

const Content: React.FC = ({ children }: IContentProps) => (
  <div className='flex flex-1 justify-center'>
    <div className='max-w-[450px] w-full'>
      {children}
    </div>
  </div>
)

export default Content
