import React, { FC, useState } from 'react'
import styles from './ChooseNft.module.scss'
import Image from 'next/image'
import { cutWallet } from '@/utils'
import Icon from '@/components/Icon'
import { INft, IOwner, nftTradeItemsArray } from '../../../store'
import CheckCard from '@/components/CheckCard'

interface IChooseNft {
  belong?: string
  className?: string
  nft: INft | {owner: IOwner}
  edit?: {
    myNft: typeof nftTradeItemsArray
    onSelectNft(id: number): void
  }
}

const ChooseNft: FC<IChooseNft> = (props) => {
  const { nft, className, edit, belong } = props
  const [openSelectNft, setOpenSelectNft] = useState(false)

  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles.user}>
        <Image src={nft?.owner.avatar || ''} alt="avatar" width={32} height={32} />
        <div className={styles.text}>
          <span>{belong || nft?.owner.name}</span>
          <p>{cutWallet(nft?.owner.wallet || '', 4)}</p>
        </div>
      </div>
      <div className={styles.nft}>
        {'image' in nft ? (
          <Image src={`${nft.image}`} alt="nft" width={108} height={108} onClick={() => edit && setOpenSelectNft(!openSelectNft)} className={!!edit ? 'pointer' : ''} />
        ) : (
          <div className={styles['placeholder-img']} onClick={() => edit && setOpenSelectNft(!openSelectNft)}>
            <Icon name="image_solid" fontSize={24} color="grey" />
            <p>Choose NFT</p>
          </div>
        )}
        {'price' in nft ? (
          <p className={styles.price}>{nft!.price} EHT</p>
          ) : (
          <p className={`${styles.price} ${styles['price_placeholder']}`}>0.0 EHT</p>
        )}
        {!!edit && openSelectNft && (
          <div className={styles['nft-selection-window']}>
            <div className={styles['nft-selection-window-wrap']}>
              {edit.myNft.map(i => (
                <CheckCard key={i.id} checked={'id' in nft ? i.id == nft.id : false} icon={false} className={styles['nft-selection-window-wrap__item']} onClick={() => {
                  setOpenSelectNft(false)
                  edit.onSelectNft(i.id)
                }}>
                  <Image src={i.image} alt={i.image} width={108} height={108} />
                </CheckCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseNft