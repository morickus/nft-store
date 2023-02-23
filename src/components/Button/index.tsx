import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss'
import { Button as ButtonAntd, ButtonProps } from 'antd'
import classnames from 'classnames'

interface IButton {
  className?: string
  type?: 'primary' | 'default'
  size?: 'large' | 'middle' | 'small'
}

const Button: FC<IButton & ButtonProps & PropsWithChildren> = (props) => {
  const { children, type = 'default', size = 'middle', className } = props

  return (
    <ButtonAntd
      {...props}
      size={size}
      type={type}
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
