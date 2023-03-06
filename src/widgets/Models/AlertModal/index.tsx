import { FC, ReactNode } from 'react'
import { ModalProps } from 'antd'
import Modal from '@/components/Modal'
import styles from './AlertModal.module.scss'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

interface IAlertModal {
  type?: 'success' | 'warning' | 'error'
  title?: string | ReactNode
  subtitle?: string | ReactNode
  text?: string | ReactNode
  button?: {
    text?: string | ReactNode
    onClick(): void
  }
}

const AlertModal: FC<IAlertModal & ModalProps> = (props) => {
  const { children, type = 'success', title, subtitle, text, button } = props
  let icon

  switch (type) {
    case 'success': icon = <Icon name="success_outlined" fontSize={95} color="green" className={styles.icon} />
      break
    case 'warning': icon = <Icon name="alert_filled" fontSize={95} color="red" className={styles.icon} />
      break
    case 'error': icon = <Icon name="rejection_outlined" fontSize={95} color="red" className={styles.icon} />
      break
  }

  return (
    <Modal className={styles.root} footer={false} {...props} title={false}>
      <div className={styles.wrapper}>
        {icon}
        {title && (<p className="title">{title}</p>)}
        {subtitle && (<p className={`subtitle ${styles.subtitle}`}>{subtitle}</p>)}
        {children}
        {text && (<p className={`text ${styles.text}`}>{text}</p>)}
        {button && (<Button className={styles.button} onClick={button.onClick}>{button.text || 'Close and check'}</Button>)}
      </div>
    </Modal>
  );
};

export default AlertModal