import { FC } from 'react'
import { IconColor, IconNamesMap } from '@/components/Icon/types'
import style from './IconButton.module.scss'
import Icon from '@/components/Icon'

interface IconButtonProps {
  icon: IconNamesMap
  colorIcon?: IconColor
  sizeIcon?: number
  size?: number
  className?: string
  onClick?(): void
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, colorIcon = 'primary', size = 40, sizeIcon = 18, className, onClick } = props

  return (
    <div
      onClick={onClick}
      className={`${style.root} ${className}`}
      style={{width: `${size}px`, height: `${size}px`}}
    >
      <Icon name={icon} color={colorIcon} className={style.icon} fontSize={sizeIcon} />
    </div>
  );
};

export default IconButton