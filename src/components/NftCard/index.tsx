import { FC } from 'react'
import Image from 'next/image'
import styles from './NftCard.module.scss'
import Button from "@/components/Button";
import Icon from '@/components/Icon'

interface INftCard {
  number: number
  image: string
  collection: string
  name: string
  price: number
  highestBid?: number
}

const NftCard: FC<INftCard> = (props) => {
  const { number, image, collection, name, price, highestBid } = props

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Image src={image} alt={name} width={323} height={280} />
        <div className={styles.buttons}>
          <Button size="medium">BuyNow</Button>
          <div className={styles['icon-btn']}>
            <Icon name="cart_filled" color="primary" />
          </div>
          <div className={`${styles['icon-btn']} ${styles.rotate}`}>
            <Icon name="more-menu_filled" color="primary" />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <span className={styles.label}>{collection}</span>
        <p className={styles.name}>{name} #{number}</p>
        <div className={styles.grid}>
          <div>
            <span className={styles.label}>Price</span>
            <p className={styles.text}>{price} ETH</p>
          </div>
          <div>
            <span className={styles.label}>Highest bid</span>
            <p className={styles.text}>{highestBid ? `${highestBid} ETH` : 'No bid yet'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;