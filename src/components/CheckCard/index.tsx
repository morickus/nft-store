import { FC, PropsWithChildren } from 'react'
import styles from './CheckCard.module.scss'
import Icon from '@/components/Icon'

interface ICheckCard {
  checked?: boolean
  icon?: boolean
}

const CheckCard: FC<ICheckCard & PropsWithChildren> = (props) => {
  const { checked, children, icon = true } = props

  return (
    <div className={`${styles.root} ${checked && styles.checked}`}>
      {icon && (<Icon name="success_filled" color="primary" fontSize={24} className={styles.icon} />)}
      {children}
    </div>
  );
};

export default CheckCard