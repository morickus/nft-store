import { FC } from 'react'
import { IconColor, IconNamesMap } from '@/components/Icon/types'
import style from './IconButton.module.scss'
import Icon from '@/components/Icon'

interface IconButtonProps {
  icon: IconNamesMap
  colorIcon?: IconColor
  sizeIcon?: '24' | '18' | '16'
  width?: '40' | '25'
  className?: string
  onClick?(): void
}

const IconButton: FC<IconButtonProps> = (props) => {
  const { icon, colorIcon = 'primary', width = '40', sizeIcon = '18', className, onClick } = props

  return (
    <div className={`${style.root} ${className} ${style[`width_${width}`]}`} onClick={onClick}>
      <Icon name={icon} color={colorIcon} className={`${style.icon} ${style[`size_${sizeIcon}`]}`} />
    </div>
  );
};

export default IconButton