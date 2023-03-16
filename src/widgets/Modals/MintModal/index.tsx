import React, { FC, useState } from 'react'
import styles from './MintModal.module.scss'
import IconButton from '@/components/IconButton'
import Image from 'next/image'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Link from 'next/link'
import Modal from '@/components/Modal'
import { ModalProps } from 'antd'
import { Nested } from '@/components/NftNested'
import { props } from '../../../../store'

interface IMintModal {
  heading: string
  image: string
  name: string
  label: string
  text?: string
  referral: string
  nested?: Nested[]
  property: props
}

const MintModal: FC<IMintModal & ModalProps> = (props) => {
  const { heading, nested, image, name, property, referral, label, text } = props
  const [toggleNested, setToggleNested] = useState(false)

  return (
    <Modal
      width={1212}
      footer={false}
      {...props}
    >
      <div className={styles.root}>
        <div className="modal-box-wrap">
          <div className={styles.wrapper}>
            <div className={styles['left-side']}>
              {nested && toggleNested ? (
                <div className={styles['second-screen']}>
                  <div className={styles['second-screen__header']}>
                    <p>Nested items</p>
                    <IconButton icon="chevron-up-down_outlined" colorIcon="default" onClick={() => setToggleNested(false)} />
                  </div>
                  <div className={styles['second-screen__content']}>
                    {nested.map(i => {
                      return 'image' in i ? (
                        <div key={i.title} className={`${styles['nested-item']} ${styles['nested-item_image']}`}>
                          <Image className={styles.image} src={i.image} width={241} height={164} alt={i.image} />
                          <span className={styles['nested-item__title']}>{i.title}</span>
                          <p className={styles['nested-item__subtitle']}>{i.subtitle}</p>
                        </div>
                      ) : (
                        <div key={i.title} className={styles['nested-item']}>
                          <Icon name={i.icon} className={styles.icon} fontSize={64} color="grey" />
                          <div>
                            <span className={styles['nested-item__title']}>{i.title}</span>
                            <p className={styles['nested-item__subtitle']}>{i.subtitle}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ): (
                <div className={styles['first-screen']}>
                  <Image src={image} alt={image} width={550} height={550} />
                  {nested && (
                    <Button className={styles['first-screen__button']} onClick={() => setToggleNested(true)}>
                      Open nested NFTs <Icon name="chevron-up-down_outlined" className={styles['first-screen__button-icon']} />
                    </Button>
                  )}
                </div>
              )}
            </div>
            <div className={styles['right-side']}>
              <p className={styles.title}>{heading}</p>
              <div className={styles['right-side__name']}>
                <span>{label}</span>
                <p className={styles.subtitle}>{name}</p>
                {text && <p className={styles.text}>{text}</p>}
              </div>
              <div className={styles.property}>
                <div className={`${styles['property__item']} ${styles['property__item_color']}`}>
                  <span>color</span>
                  <p>{property.color}</p>
                </div>
                <div className={`${styles['property__item']} ${styles['property__item_location']}`}>
                  <span>location</span>
                  <p>{property.location}</p>
                </div>
                <div className={`${styles['property__item']} ${styles['property__item_stick']}`}>
                  <span>stick</span>
                  <p>{property.stick}</p>
                </div>
                <div className={`${styles['property__item']} ${styles['property__item_side']}`}>
                  <span>side</span>
                  <p>{property.side}</p>
                </div>
              </div>
              <div className={styles['right-side__buttons']}>
                <Button type="primary">View in my collection</Button>
                <Link href="/" className={styles.link}>This Smart-contract</Link>
              </div>
              <div className={styles['right-side__ref-link-wrap']}>
                <p>Your referral link</p>
                <div>
                  <Link href="/" className={styles.link}>{referral}</Link>
                  <Button size="small">Copy</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MintModal