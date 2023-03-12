import { FC, PropsWithChildren } from 'react'
import styles from './CheckCard.module.scss'
import Icon from '@/components/Icon'

interface ICheckCard {
  className?: string
  checked?: boolean
  icon?: boolean

  onClick?(): void
}

const CheckCard: FC<ICheckCard & PropsWithChildren> = (props) => {
  const { children, checked, icon = true, className, onClick } = props

  return (
    <div className={`${styles.root} ${checked && styles.checked} ${className}`} onClick={onClick}>
      {icon && (<Icon name="success_filled" color="primary" fontSize={24} className={styles.icon} />)}
      {children}
    </div>
  );
};

export default CheckCard