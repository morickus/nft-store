import { FC } from 'react'
import { Switch as SwitchAntd, SwitchProps } from 'antd'
import styles from './Switch.module.scss'

const Switch: FC<SwitchProps> = (props) => {
  const { defaultChecked } = props

  return (
    <SwitchAntd {...props} prefixCls="switch-antd" className={styles.root} defaultChecked={defaultChecked} />
  );
};

export default Switch