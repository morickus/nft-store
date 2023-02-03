import { FC } from 'react'
import styles from './Checkbox.module.scss'
import { Checkbox as CheckboxAntd } from 'antd'

interface ICheckbox {
  value: string
  label?: string
}

const Checkbox: FC<ICheckbox> = (props) => {
  const { value, label } = props

  return (
    <CheckboxAntd value={value} className={`antd-checkbox ${styles.root}`}>
      {label}
    </CheckboxAntd>
  );
};

export default Checkbox