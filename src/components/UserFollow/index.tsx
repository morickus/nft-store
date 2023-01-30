import { FC } from 'react'
import styles from './UserFollow.module.scss'
import Image from 'next/image'
import { convertingCount } from '@/utils'

interface IUserFollow {
  image: string
  name: string
  follow: number
  className?: string
}

const UserFollow: FC<IUserFollow> = (props) => {
  const { image, name, follow, className } = props

  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.user}>
        <Image src={image} alt="avatar" width={42} height={42} />
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.follow}>
        <span className={styles.label}>Follow</span>
        <span className={styles.count}>{convertingCount(follow)}</span>
      </div>
    </div>
  );
};

export default UserFollow