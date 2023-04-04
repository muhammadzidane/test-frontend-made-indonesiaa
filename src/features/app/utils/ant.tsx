import { Modal, type ModalProps } from 'antd'

type TModalConfirmType = 'info' | 'success' | 'warning'

export const modalConfirm = (type: TModalConfirmType, props: ModalProps): void => {
  Modal[type]({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    ...props
  })
}
