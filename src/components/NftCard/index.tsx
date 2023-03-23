import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './NftCard.module.scss'
import IconButton from '@/components/IconButton'
import { cutWallet } from '@/utils'
import dynamic from 'next/dynamic'
import { INft } from '../../../store'
import NftTradingModal from '@/widgets/Modals/NftTradingModal'
import dayjs from 'dayjs'

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
  startBid: number
  currentBid?: number
  bidStep?: number
  redemption: number
  startAt: Date
  endAt: Date
}

type NftCardType = IDefaultNftCard | ITradingNftCard | IAuctionNftCard

const NftCard: FC<NftCardType> = (props) => {
  const { id, type = 'default', number, image, collection, name } = props
  const [tradeNft, setTradeNft] = useState<INft>()
  const [primary, setPrimary] = useState(false)

  useEffect(() => {
    if (props.type === "auction" && dayjs(props.startAt).isBefore(dayjs())) {
      const diffHours = dayjs(props.endAt).diff(dayjs(), 'hours')
      if (diffHours <= 12) {
        setPrimary(true)
      }
    }
    // @ts-ignore
  }, [props.endAt, props.startAt, props.type])

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
      case "auction": {
        const { startBid, currentBid, bidStep = 5, redemption, startAt, endAt } = props
        const auctionStart = dayjs(startAt).isBefore(dayjs())
        if (!auctionStart) {
          return (
            <>
              <div>
                <span className={styles.label}>Start bid</span>
                <p className={styles.text}>{startBid} ETH</p>
              </div>
              <div>
                <span className={styles.label}>Redemption</span>
                <p className={styles.text}>{redemption} ETH</p>
              </div>
              <div>
                <span className={styles.label}>Timer</span>
                <p className={`${styles.text} ${styles['font-width-400']}`}>Auction starts in {dayjs(startAt).format('DD.MM.YYYY in HH:mm')}</p>
              </div>
            </>
          )
        }

        const diffHours = dayjs(endAt).diff(dayjs(), 'hours')
        return (
          <>
            <div>
              <span className={styles.label}>Current bid</span>
              <p className={styles.text}>{currentBid} ETH</p>
            </div>
            <div>
              <span className={styles.label}>Bid step</span>
              <p className={styles.text}>min {bidStep} ETH</p>
            </div>
            <div>
              <span className={styles.label}>Timer</span>
              <p className={`${styles.text} ${styles['font-width-400']} ${diffHours < 61 && styles['primary']}`}>
                Auction ends in {diffHours > 61 ? dayjs(endAt).format('DD.MM.YYYY in HH:mm') : `${diffHours}h`}
              </p>
            </div>
          </>
        )
      }
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
      <div className={`${styles.root} ${primary && styles.primary}`}>
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