import { FC, ReactNode } from 'react'
import { ModalProps } from 'antd'
import Modal from '@/components/Modal'
import styles from './TemplateModal.module.scss'
import Icon from '@/components/Icon'
import IconButton from '@/components/IconButton'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Button'), { ssr: false })

export interface ITemplateModal extends ModalProps {
  icon?: 'success' | 'warning' | 'error' | false
  title?: string | ReactNode
  subtitle?: string | ReactNode
  text?: string | ReactNode
  button?: true | ReactNode
  maxWidthText?: number

  onBack?(): void
  onCancel?(): void
}

const TemplateModal: FC<ITemplateModal> = (props) => {
  const { children, icon = 'success', title, subtitle, text, button = true, onCancel, onBack, maxWidthText } = props
  let iconRender

  switch (icon) {
    case 'success': iconRender = <Icon name="success_outlined" fontSize={95} color="green" className={styles.icon} />
      break
    case 'warning': iconRender = <Icon name="alert_filled" fontSize={95} color="red" className={styles.icon} />
      break
    case 'error': iconRender = <Icon name="rejection_outlined" fontSize={95} color="red" className={styles.icon} />
      break
  }

  return (
    <Modal className={styles.root} footer={false} {...props} title={false}>
      {onBack && <IconButton icon="chevron-left-right_outlined" sizeIcon={24} size={40} colorIcon="default" onClick={onBack} className={styles['icon-back']} />}
      <div className={styles.wrapper}>
        {iconRender}
        {title && (<p className="title">{title}</p>)}
        {subtitle && (<p className={`subtitle ${styles.subtitle}`}>{subtitle}</p>)}
        {children}
        {text && (<p className={`text ${styles.text}`} style={{maxWidth: maxWidthText}}>{text}</p>)}
        {button && (
          <div className={styles['button-wrap']}>
            {button === true ? (<Button onClick={() => onCancel && onCancel()}>Close and check</Button>) : button}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default TemplateModal