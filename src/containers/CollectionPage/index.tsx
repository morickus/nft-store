import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { collectionPage } from '../../../store'
import Image from 'next/image'
import IconButton from '@/components/IconButton'
import Button from '@/components/Button'
import Link from 'next/link'
import { cutWallet } from '@/utils'
import Icon from '@/components/Icon'
import RadioButton from '@/components/RadioButton'
import { useRouter } from 'next/router'
import NftCard from '@/components/NftCard'

const CollectionPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [tab, setTab] = useState('items')
  const reWrapper = useRef<HTMLDivElement>(null)
  const { banner, logo, title, subtitle, creator, smart, props, text, price, items } = collectionPage

  return (
    <div className={styles.root}>
      <div className="wrapper-page" ref={reWrapper}>
        <div className={styles['sticky-wrap']} style={{height: `${reWrapper.current?.clientHeight}px`}}>
          <div className={styles['sticky']}>
            <div className={styles.price}>
              <Icon name="token_filled" color="primary" fontSize={24} />
              <p>{price} ETH</p>
            </div>
            <div className={styles.button}>Mint</div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.banner}>
            <Image src={banner} alt={banner} layout="fill" className={styles.image} />
            <div className={styles.logo}>
              <Image src={logo} alt={logo} width={120} height={120} />
            </div>
            <div className={styles.control}>
              <div>
                <IconButton icon="fin-assets_filled" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="token_filled" colorIcon="default" sizeIcon={16} size={32} />
              </div>
              <div>
                <Button size="small" className={styles.btn}>Read more</Button>
                <IconButton icon="discord_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="facebook_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="twitter_solid" colorIcon="default" sizeIcon={16} size={32} />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.content}>
              <span className={styles.title}>{title}</span>
              <p className={styles.subtitle}>{subtitle}</p>
              <div className={styles.info}>
                <div>
                  <span>By</span>
                  <Link href="/">{creator}</Link>
                </div>
                <div>
                  <span>Smart-contract</span>
                  <Link href="/">{cutWallet(smart)}</Link>
                </div>
              </div>
              <div className={styles.props}>
                {Object.keys(props).map((key, index) => (
                  <div key={key} className={`${styles['props__item']} ${styles[`props__item_${key}`]}`}>
                    <span>{key}</span>
                    {/*TODO: fix error*/}
                    <p>{props[key]} {(key == 'floor' || key == 'volume') && 'ETH'}</p>
                  </div>
                ))}
              </div>
              <p className={styles.text}>{text}</p>
              <p className={styles['text-btn']}>Read more</p>
              <Button type="primary" >About collection</Button>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.tabs}>
            <RadioButton
              buttons={
                [
                  {text: 'Items', value: 'items'},
                  {text: 'Activity', value: 'activity'},
                  {text: 'Analytics', value: 'analytics'},
                  {text: 'Holders', value: 'holders'},
                  {text: 'Governance', value: 'governance'}
                ]
              }
              onChange={(e) => setTab(e.target.value)}
              defaultValue="items"
            />
          </div>
          <div className={styles.content}>
            {tab === 'items' && (
              <div className={styles['items']}>
                {items.map((i, index) => (
                  <NftCard key={index} {...i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage