import { FC } from 'react'
import styles from './UserCard.module.scss'
import Image from 'next/image'
import { convertingCount } from '@/utils'
import Link from 'next/link'

interface IUserCard {
  avatar: string
  image: string
  name: string
  follow: number
  className?: string
  withoutImage?: boolean
}

const UserCard: FC<IUserCard> = (props) => {
  const { image, avatar, name, follow, className, withoutImage } = props

  return (
    <div className={`${styles.root} ${withoutImage && styles['without-image']} ${className}`}>
      {!withoutImage && (
        <div className={styles.top}>
          <Image src={image} alt="image" width={316} height={130} />
        </div>
      )}
      <div className={styles.bottom}>
        <div className={styles.user}>
          <Image src={avatar} alt="avatar" width={42} height={42} />
          <Link href="/" className={styles.name}>{name}</Link>
        </div>
        <div className={styles.follow}>
          <span className={styles.label}>Follow</span>
          <span className={styles.count}>{convertingCount(follow)}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard