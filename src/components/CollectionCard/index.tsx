import { FC } from 'react'
import styles from './CollectionCard.module.scss'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { convertingCount } from '@/utils'

interface ICollectionCard {
  image: string
  ethereum: boolean
  bitcoin: boolean
  countNft: number
  status: number
  avatar: string
  name: string
  mintable: boolean
}

const CollectionCard: FC<ICollectionCard> = (props) => {
  const {
    image,
    ethereum,
    bitcoin,
    countNft,
    status,
    avatar,
    name,
    mintable
  } = props

  const statusRender = (status: number) => {
    if (status === 1) {
      return (
        <div className={`${styles.status} ${styles['status_red']}`}>
          <Icon name="fire_filled" />
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
    <div className={styles.root}>
      <div className={styles.top}>
        <Image src={image} alt={image} width={556} height={229} />
        <div className={styles.panel}>
          <div className={styles['panel__top']}>
            {bitcoin && <Icon name="fin-assets_filled" className={styles.icon} />}
            {ethereum && <Icon name="token_filled" className={styles.icon} />}
            {statusRender(status)}
          </div>
          <div className={styles['panel__bottom']}>
            <span>{convertingCount(countNft)} NFTs</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.right}>
          <Image src={avatar} alt={avatar} width={32} height={32} />
          <span className={styles.title}>{name}</span>
        </div>
        <div className={styles.left}>
          <span className={`${styles.mintable} ${styles[`${mintable}`]}`}>mintable</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard