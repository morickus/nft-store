import { FC } from 'react'
import { Switch as SwitchAntd } from 'antd'
import styles from './Switch.module.scss'

interface ISwitch {
  defaultChecked?: boolean
}

const Switch: FC<ISwitch> = (props) => {
  const { defaultChecked } = props

  return (
    <>
      <style jsx global>{`
        .prefix-checked {
          background: var(--primary-color) !important;
        }
        .prefix-handle {
          width: 10px !important;
          height: 10px !important;
        }
        .prefix-handle:before {
          background: var(--primary-color) !important;
        }
        .prefix.prefix-checked .prefix-handle {
          inset-inline-start: calc(100% - 12px) !important;
        }
        .prefix:hover:not(.prefix-disabled, .prefix-checked),
        .prefix-checked .prefix-handle:before {
          background: #FFFFFF !important;
        }
      `}</style>
      <SwitchAntd prefixCls="prefix" className={styles.root} defaultChecked={defaultChecked} />
    </>
  );
};

export default Switch