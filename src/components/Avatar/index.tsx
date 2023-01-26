import { FC } from 'react'
import styles from './Avatar.module.scss'
import Image from 'next/image'

interface IAvatar {
  src: string
  online?: boolean
  className?: string
  onClick?(): void
}

const Avatar: FC<IAvatar> = (props) => {
  const { src, online, className, onClick } = props

  return (
    <div className={`${styles.root} ${online && styles.online} ${className}`} onClick={onClick}>
      <Image src={src} alt="avatar" width={48} height={48} />
    </div>
  );
};

export default Avatar