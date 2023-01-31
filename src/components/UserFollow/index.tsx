import { FC } from 'react'
import styles from './UserFollow.module.scss'
import Image from 'next/image'
import { convertingCount } from '@/utils'
import Link from 'next/link'

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
        <Link href="/" className={styles.name}>{name}</Link>
      </div>
      <div className={styles.follow}>
        <span className={styles.label}>Follow</span>
        <span className={styles.count}>{convertingCount(follow)}</span>
      </div>
    </div>
  );
};

export default UserFollow