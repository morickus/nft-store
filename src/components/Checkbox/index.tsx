import { FC } from 'react'
import styles from './Checkbox.module.scss'
import { Checkbox as CheckboxAntd, CheckboxProps } from 'antd'

interface ICheckbox {
  label?: string
}

const Checkbox: FC<ICheckbox & CheckboxProps> = (props) => {
  const { value, label } = props

  return (
    <CheckboxAntd {...props} value={value} className={`antd-checkbox ${styles.root}`}>
      {label}
    </CheckboxAntd>
  );
};

export default Checkbox