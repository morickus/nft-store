import React, { FC } from 'react'
import styles from './Wallet.module.scss'
import Image from 'next/image'
import { cutWallet } from '@/utils'
import Icon from '@/components/Icon'
import Switch from '@/components/Switch'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Button'), { ssr: false })

interface IWallet {
  isSwitch?: boolean
  isButton?: boolean
}

const Wallet: FC<IWallet> = (props) => {
  const { isButton, isSwitch } = props

  const wallet = {
    img: '/wallet/metamask.svg',
    name: 'Ethereum',
    wallet: '0x6dkfed9339dd0hh',
    eth: 134.1,
    wEth: 1233.5
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles['header__left-side']}>
          <Image src={wallet.img} alt={wallet.img} width={24} height={24} />
          <div className={styles.info}>
            <p className={styles['info__name']}>{wallet.name}</p>
            <p className={styles['info__wallet']}>{cutWallet(wallet.wallet, 4)}</p>
          </div>
        </div>
        <div className={styles['header__right-side']}>
          <Button size="small" className={styles.btn}>Copy</Button>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.name}>Ethereum</p>
        <div className={styles.wallets}>
          <div className={styles['wallets__item']}>
            <div className={styles.balance}>
              <Icon name="token_filled" fontSize={14} />
              <p>{wallet.eth} ETH</p>
            </div>
            {isSwitch ? <Switch defaultChecked /> : <div />}
          </div>
          <div className={styles['wallets__item']}>
            <div className={styles.balance}>
              <Icon name="token_filled" color="pink" fontSize={14} />
              <p>{wallet.wEth} wETH</p>
            </div>
            {isSwitch ? <Switch /> : <div />}
          </div>
        </div>
        {isButton && <Button size="small" className={styles.button}>Другие сети</Button>}
      </div>
    </div>
  );
};

export default Wallet