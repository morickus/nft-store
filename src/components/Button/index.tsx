import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss'
import { Button as ButtonAntd } from 'antd'
import classnames from 'classnames'

interface IButton {
  className?: string
  type?: 'primary' | 'stroked'
  size: 'large' | 'medium' | 'small'
}

const Button: FC<IButton & PropsWithChildren> = (props) => {
  const { children, type = 'primary', size, className } = props

  return (
    <ButtonAntd
      type="text"
      className={classnames(styles.root, {
        [styles[`type_${type}`]]: type,
        [styles[`size_${size}`]]: size,
      }, className)}
    >
      {children}
    </ButtonAntd>
  );
};

export default Button
