import { Modal, type ModalProps } from 'antd'
import { AppButton } from '../components/base'

export const modalConfirm = (type: string, props: ModalProps): void => {
  Modal[type]({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
        {/* <button onClick={props.onOk}>OKE</button> */}
      </div>
    ),
    ...props
  })
}
