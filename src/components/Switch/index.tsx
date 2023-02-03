import { FC } from 'react'
import { Switch as SwitchAntd } from 'antd'
import styles from './Switch.module.scss'

interface ISwitch {
  defaultChecked?: boolean
}

const Switch: FC<ISwitch> = (props) => {
  const { defaultChecked } = props

  return (
    <SwitchAntd prefixCls="switch-antd" className={styles.root} defaultChecked={defaultChecked} />
  );
};

export default Switch