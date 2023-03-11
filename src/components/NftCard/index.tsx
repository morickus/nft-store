import { FC, ReactNode } from 'react'
import Image from 'next/image'
import styles from './NftCard.module.scss'
import Button from "@/components/Button"
import IconButton from '@/components/IconButton'
import { cutWallet } from '@/utils'

interface INftCard {
  number: number
  image: string
  collection: string
  name: string
  buttons?: ReactNode
  price?: number
  highestBid?: number
  owner?: string
  latestPrice?: {
    price: number
    extraPay: number
  }
}

const NftCard: FC<INftCard> = (props) => {
  const { number, image, collection, name, buttons, price, highestBid, owner, latestPrice } = props

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Image src={image} alt={name} width={323} height={280} />
        <div className={styles.buttons}>
          {buttons ? buttons : (
            <>
              <Button type="primary">BuyNow</Button>
              <IconButton icon="cart_filled" className={styles['icon-btn']} />
              <IconButton icon="more-menu_filled" className={`${styles['icon-btn']} ${styles.rotate}`} />
            </>
          )}
        </div>
      </div>
      <div className={styles.body}>
        <span className={styles.label}>{collection}</span>
        <p className={styles.name}>{name} #{number}</p>
        <div className={styles.grid}>
          {price && (
            <div>
              <span className={styles.label}>Price</span>
              <p className={styles.text}>{price} ETH</p>
            </div>
          )}
          {highestBid !== undefined && (
            <div>
              <span className={styles.label}>Highest bid</span>
              <p className={styles.text}>{highestBid ? `${highestBid} ETH` : 'No bid yet'}</p>
            </div>
          )}
          {owner && (
            <div>
              <span className={styles.label}>Owner</span>
              <p className={`${styles.text} underline`}>{cutWallet(owner, 4)}</p>
            </div>
          )}
          {latestPrice && (
            <div>
              <span className={styles.label}>Latest price</span>
              <p className={styles.text}>
                {latestPrice.price} ETH&nbsp;
                <span className={(latestPrice.extraPay) > 0 ? styles.green : styles.red}>
                  {(latestPrice.extraPay) > 0 ? '+' : ''}&nbsp;{latestPrice.extraPay}&nbsp;ETH
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NftCard;