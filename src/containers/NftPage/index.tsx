import { useState } from 'react'
import styles from './NftPage.module.scss'
import { useRouter } from 'next/router'
import NftNested from '@/components/NftNested'
import { nftPage } from '../../../store'
import Image from 'next/image'
import IconButton from '@/components/IconButton'
import Link from 'next/link'
import { cutWallet } from '@/utils'
import Button from '@/components/Button'
import RadioButton from '@/components/RadioButton'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'
import Icon from '@/components/Icon'

dayjs.extend(relativeTime)
dayjs.extend(utc);

const NftPage = () => {
  const router = useRouter()
  const [tab, setTab] = useState('overview');
  const { id } = router.query
  const { image, name, number, collection, owner, creator, price, description, bids, properties, like, nested } = nftPage

  return (
    <div className={styles.root}>
      <div className="container-page">
        <div className={styles.wrapper}>
          <div className={styles['left-side']}>
            <div className={styles.header}>
              <div className={styles['header__info']}>
                <h1 className={styles.title}>{name} #{number}</h1>
                <div className={styles['collection-wrap']}>
                  <Link href={`/collection/${collection.id}`} className={styles.collection}>
                    <Image src={collection.image} alt={collection.image} width={24} height={24} />
                    <span>{collection.name}</span>
                  </Link>
                  <div>
                    <IconButton icon="fin-assets_filled" sizeIcon={16} colorIcon="default" size={25} className={styles.icon} />
                    <IconButton icon="token_filled" sizeIcon={16} colorIcon="default" size={25} className={styles.icon} />
                  </div>
                </div>
                <div className={styles['user-wrap']}>
                  <div className={styles['user-wrap__user']}>
                    <Image src={owner.avatar} alt={owner.avatar} width={36} height={36} />
                    <div className={styles.text}>
                      <span>Owner</span>
                      <p>{cutWallet(owner.wallet)}</p>
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles['user-wrap__user']}>
                    <Image src={creator.avatar} alt={creator.avatar} width={36} height={36} />
                    <div className={styles.text}>
                      <span>Owner</span>
                      <p>{cutWallet(creator.wallet)}</p>
                    </div>
                  </div>
                </div>
                {(tab === 'overview' || tab === 'properties') ? (
                  <>
                    <div className={styles['price-wrap']}>
                      <div className={styles.item}>
                        <span className={styles.label}>Price</span>
                        <p>{price.eth} ETH</p>
                        <span>${price.dollar.toLocaleString('en')}</span>
                      </div>
                      <div className={styles.item}>
                        <div>
                          <span className={styles.label}>Highest&nbsp;<span className={styles.black}>floor bid</span></span>
                          <p>{price.highestBid} wETH</p>
                          <span>by <span className={styles.link}>{cutWallet(price.highestBidBy)}</span></span>
                        </div>
                      </div>
                    </div>
                    <div className={styles['buttons-price-wrap']}>
                      <Button type="primary">ButNow for {price.eth} ETH</Button>
                      <IconButton icon="cart_filled" sizeIcon={18} />
                      <Button>Place a bid</Button>
                    </div>
                  </>
                ) : (
                  <div className={styles['buttons-active-wrap']}>
                    <div className={`${styles['buttons-active-wrap__item']} ${styles['primary']}`}>
                      <span>Sell</span>
                      <Icon name="token_filled" />
                    </div>
                    <div className={`${styles['buttons-active-wrap__item']} ${styles['blue']}`}>
                      <span>Transfer</span>
                      <Icon name="arrow-right_outlined" />
                    </div>
                    <div className={`${styles['buttons-active-wrap__item']} ${styles['green']}`}>
                      <span>Exchange</span>
                      <Icon name="trade_outlined" />
                    </div>
                    <div className={`${styles['buttons-active-wrap__item']} ${styles['red']}`}>
                      <span>Burn</span>
                      <Icon name="fire_filled" />
                    </div>
                  </div>
                )}
              </div>
              <div className={styles['header__image']}>
                <NftNested image={image} nested={nested} panel={{like}} />
              </div>
            </div>
            <div className={styles['content-wrap']}>
              <div className={styles['tabs']}>
                <RadioButton
                  buttons={
                    [
                      {text: 'Overview', value: 'overview'},
                      {text: 'Properties', value: 'properties'},
                      {text: 'Bids', value: 'bids'},
                      {text: 'History', value: 'history'}
                    ]
                  }
                  onChange={(e) => setTab(e.target.value)}
                  defaultValue="overview"
                />
              </div>
              <div className={styles.content}>
                {tab === 'overview' && (
                  <div className={styles.block}>
                    <span className={styles.title}>Description</span>
                    <p className={styles.text}>{description}</p>
                    <Button size="small">View all</Button>
                  </div>
                )}
                {tab === 'properties' && (
                  <div className={styles.properties}>
                    {properties.map(i => (
                      <div key={i.label} className={styles['properties__item']}>
                        <div className={styles['left-side']}>
                          <Image src={i.image} alt={i.image} width={24} height={24} />
                          <div className={styles.info}>
                            <span>{i.label}</span>
                            <p>{i.text}</p>
                          </div>
                        </div>
                        <p className={styles.value}>{i.value}%</p>
                      </div>
                    ))}
                  </div>
                )}
                {(tab === 'overview' || tab === 'bids' || tab === 'history') && (
                  <div className={styles.block}>
                    <span className={styles.title}>{tab === 'history' ? 'History' : 'Latest bids'}</span>
                    <div className={styles['bids-wrap']}>
                      {bids.map(i => (
                        <div key={i.created_at} className={styles['bids-wrap__item']}>
                          <div className={styles.user}>
                            <Image src={i.user.avatar} alt={i.user.avatar} width={36} height={36} className={styles.avatar} />
                            <div className={styles.info}>
                              <span>{i.user.name}&nbsp;{tab === 'history' && (<span className={styles.for}>listed for</span>)}</span>
                              <p>{cutWallet(i.user.wallet)}</p>
                            </div>
                          </div>
                          {tab === 'history' ? (
                            <span className={styles.date}>{dayjs.unix(i.created_at).utc().format('DD.MM.YYYY, hh:mm')}</span>
                          ) : (
                            <span className={styles.date}>{dayjs().to(dayjs.unix(i.created_at))}</span>
                          )}
                          <div className={styles.price}>
                            <span>{i.price.wEth} wETH</span>
                            <p>${i.price.dollar.toLocaleString('en')}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button size="small">View all</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles['right-side']}>
            <NftNested image={image} nested={nested} panel={{like}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftPage