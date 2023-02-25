import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import { collectionPage, propsType } from '../../../store'
import Image from 'next/image'
import IconButton from '@/components/IconButton'
import Button from '@/components/Button'
import Link from 'next/link'
import { cutWallet } from '@/utils'
import Icon from '@/components/Icon'
import RadioButton from '@/components/RadioButton'
import { useRouter } from 'next/router'
import NftCard from '@/components/NftCard'
import Modal from '@/components/Modal'

const CollectionPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [tab, setTab] = useState('items')
  const reWrapper = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { banner, logo, title, subtitle, creator, smart, props, text, price, items, description, aboutProject, team } = collectionPage

  type keys = keyof propsType

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
                <Button size="small" className={styles.btn} onClick={() => setIsModalOpen(true)}>Read more</Button>
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
                    <p>{props[key as keys]} {(key == 'floor' || key == 'volume') && 'ETH'}</p>
                  </div>
                ))}
              </div>
              <p className={styles.text}>{text}</p>
              <p className={styles['text-btn']} onClick={() => setIsModalOpen(true)}>Read more</p>
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
      <Modal
        width={1000}
        footer={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className={styles.modal}>
          <div className="modal-wrap">
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.block}>
              <p className={styles.heading}>Description</p>
              <p className={styles.text}>{description}</p>
            </div>
            <div className={styles.block}>
              <p className={styles.heading}>Opportunities</p>
              <div className={styles.props}>
                {Object.keys(props).map((key, index) => (
                  <div key={key} className={`${styles['props__item']} ${styles[`props__item_${key}`]}`}>
                    <span>{key}</span>
                    <p>{props[key as keys]} {(key == 'floor' || key == 'volume') && 'ETH'}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.block}>
              <p className={styles.heading}>About project</p>
              <p className={styles.text}>{aboutProject}</p>
              <div className={styles.social}>
                <IconButton icon="discord_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="facebook_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="twitter_solid" colorIcon="default" sizeIcon={16} size={32} />
              </div>
            </div>
            <div className={styles.block}>
              <p className={styles.heading}>Our team</p>
              <div className={styles.team}>
                {team.map(i => (
                  <div key={i.image} className={styles.item}>
                    <Image src={i.image} alt={i.image} width={150} height={150} />
                    <p className={styles.name}>{i.name}</p>
                    <p className={styles.position}>{i.position}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CollectionPage