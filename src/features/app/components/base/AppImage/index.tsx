// Ant
import { Image } from 'antd'

// Interfaces
import { type IAppImageProps } from './interfaces'

const AppImage: React.FC = ({ preview, ...props }: IAppImageProps) => (
  <Image preview={preview} {...props} />
)

AppImage.defaultProps = {
  preview: false
}

export default AppImage
