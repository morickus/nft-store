import { FC, useState } from 'react'
import Image from 'next/image'
import styles from './NftCard.module.scss'
import IconButton from '@/components/IconButton'
import { cutWallet } from '@/utils'
import dynamic from 'next/dynamic'
import { INft } from '../../../store'
import NftTradingModal from '@/widgets/Modals/NftTradingModal'

const Button = dynamic(() => import('@/components/Button'), { ssr: false })

interface INftCard {
  id: number
  name: string
  image: string
  number: number
  collection: string
  type?: 'default' | 'trading' | 'auction'
}

interface IDefaultNftCard extends INftCard {
  type?: 'default'
  price: number
  highestBid?: number
}

interface ITradingNftCard extends INftCard {
  type: 'trading'
  price: number
  extraPay?: number
  owner: {
    name: string
    avatar: string
    wallet: string
  }
}

interface IAuctionNftCard extends INftCard {
  type: 'auction'
}

type NftCardType = IDefaultNftCard | ITradingNftCard | IAuctionNftCard

const NftCard: FC<NftCardType> = (props) => {
  const { id, type = 'default', number, image, collection, name } = props
  const [tradeNft, setTradeNft] = useState<INft>()

  const renderProperty = () => {
    switch (props.type) {
      case "trading": {
        const { price, owner, extraPay } = props
        return (
          <>
            <div>
              <span className={styles.label}>Owner</span>
              <p className={`${styles.text} underline`}>{cutWallet(owner.wallet, 4)}</p>
            </div>
            <div>
              <span className={styles.label}>Latest price</span>
              <p className={styles.text}>
                {price} ETH&nbsp;
                {extraPay && (<span className={(extraPay) > 0 ? styles.green : styles.red}>{(extraPay) > 0 ? '+' : ''}&nbsp;{extraPay}&nbsp;ETH</span>)}
              </p>
            </div>
          </>
        )
      }
      case "auction":
        return (
          <div>

          </div>
        )
      default: {
        const { price, highestBid } = props
        return (
          <>
            <div>
              <span className={styles.label}>Price</span>
              <p className={styles.text}>{price} ETH</p>
            </div>
            {highestBid !== undefined && (
              <div>
                <span className={styles.label}>Highest bid</span>
                <p className={styles.text}>{highestBid ? `${highestBid} ETH` : 'No bid yet'}</p>
              </div>
            )}
          </>
        )
      }
    }
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.header}>
          <Image src={image} alt={name} width={323} height={280} />
          <div className={styles.buttons}>
            {type == 'default' && (
              <>
                <Button type="primary">BuyNow</Button>
                <IconButton icon="cart_filled" className={styles['icon-btn']} />
                <IconButton icon="more-menu_filled" className={`${styles['icon-btn']} ${styles.rotate}`} />
              </>
            )}
            {props.type === "trading" && (
              <Button type="primary" onClick={() => setTradeNft({
                id,
                number,
                image,
                collection,
                name,
                owner: props.owner,
                price: props.price,
                extraPay: props.extraPay
              })}>Trade this</Button>
            )}
            {type == 'auction' && (
              <Button type="primary" onClick={() => {}}>Set a bid</Button>
            )}
          </div>
        </div>
        <div className={styles.body}>
          <span className={styles.label}>{collection}</span>
          <p className={styles.name}>{name} #{number}</p>
          <div className={styles.grid}>
            {renderProperty()}
          </div>
        </div>
      </div>
      <NftTradingModal
        tradeNft={tradeNft}
        setTradeNft={setTradeNft}
      />
    </>
  );
};

export default NftCard;