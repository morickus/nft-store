import { FC } from 'react'
import styles from './CollectionCard.module.scss'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { convertingCount } from '@/utils'
import Link from 'next/link'

interface ICollectionCard {
  id: number
  image: string
  ethereum: boolean
  bitcoin: boolean
  countNft: number
  status?: number
  avatar: string
  name: string
  mintable: boolean
  size?: 'small'
  className?: string
}

const CollectionCard: FC<ICollectionCard> = (props) => {
  const {
    id,
    image,
    ethereum,
    bitcoin,
    countNft,
    status,
    avatar,
    name,
    mintable,
    size,
    className
  } = props

  const statusRender = (status: number) => {
    if (status === 1) {
      return (
        <div className={`${styles.status} ${styles['status_red']}`}>
          <Icon name="fire_filled" fontSize={10} color="white" />
          <span>top</span>
        </div>
      )
    }

    return (
      <div className={styles.status}>
        <span>Latest</span>
      </div>
    )
  }

  return (
    <Link href={`/collection/${id}`} className={`${styles.root} ${styles[`size_${size}`]} ${className}`}>
      <div className={styles.top}>
        <Image src={image} alt={image} width={556} height={229} />
        <div className={styles.panel}>
          <div className={styles['panel__top']}>
            {bitcoin && <Icon name="fin-assets_filled" className={styles.icon} fontSize={16} />}
            {ethereum && <Icon name="token_filled" className={styles.icon} fontSize={16} />}
            {!!status && statusRender(status)}
          </div>
          <div className={styles['panel__bottom']}>
            <span>{convertingCount(countNft)} NFTs</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Image src={avatar} alt={avatar} width={32} height={32} />
          <span className={styles.title}>{name}</span>
        </div>
        <div className={styles.right}>
          <span className={`${styles.mintable} ${styles[`${mintable}`]}`}>mintable</span>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard