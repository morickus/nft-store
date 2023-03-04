import { FC, PropsWithChildren } from 'react'
import styles from './CheckCard.module.scss'
import Icon from '@/components/Icon'

interface ICheckCard {
  checked?: boolean
}

const CheckCard: FC<ICheckCard & PropsWithChildren> = (props) => {
  const { checked, children } = props

  return (
    <div className={`${styles.root} ${checked && styles.checked}`}>
      <Icon name="success_filled" color="primary" fontSize={24} className={styles.icon} />
      {children}
    </div>
  );
};

export default CheckCard