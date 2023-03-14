import React, { FC, useState } from 'react'
import styles from './ConnectWallet.module.scss'
import Modal from '@/components/Modal'
import Image from 'next/image'
import RadioButton from '@/components/RadioButton'
import Link from 'next/link'
import { ModalProps, RadioChangeEvent } from 'antd'

const ConnectWallet: FC<ModalProps> = (props) => {
  const [tab, setTab] = useState('ethereum')

  return (
    <Modal {...props} className={styles.root} footer={false} width={1800}>
      <div className={styles.wrapper}>
        <div className={styles['left-side']}>
          <Image src="/banner-wallet.jpg" alt="img" width={550} height={860} />
          <Image src="/banner-wallet-small.jpg" alt="img" width={720} height={156} />
        </div>
        <div className={styles['right-side']}>
          <p className={styles.title}>Connect wallet</p>
          <RadioButton
            buttons={
              [
                {text: 'Ethereum', value: 'ethereum'},
                {text: 'Solana', value: 'solana'},
                {text: 'Tezos', value: 'tezos'},
                {text: 'Immutable X', value: 'immu-x'},
                {text: 'Flow', value: 'flow'}
              ]
            }
            value={tab}
            className={styles.tabs}
            onChange={(e: RadioChangeEvent) => setTab(e.target.value)}
          />
          <div className={styles.wallets}>
            {tab == 'ethereum' && (
              <>
                <div className={styles['wallets__group']}>
                  <p className={styles['wallets__label']}>Recent</p>
                  <Link href="/" className={styles['wallets__item']}>
                    <Image src="/wallet/metamask.svg" alt="metamask" width={24} height={24} />
                    <p className={styles.name}>Metamask</p>
                  </Link>
                </div>
                <div className={styles['wallets__group']}>
                  <p className={styles['wallets__label']}>Popular</p>
                  <Link href="/" className={styles['wallets__item']}>
                    <Image src="/wallet/connect.svg" alt="connect" width={24} height={24} />
                    <p className={styles.name}>WalletConnect</p>
                  </Link>
                  <Link href="/" className={styles['wallets__item']}>
                    <Image src="/wallet/coinbase.svg" alt="coinbase" width={24} height={24} />
                    <p className={styles.name}>Coinbase Wallet</p>
                  </Link>
                </div>
                <div className={styles['wallets__group']}>
                  <p className={styles['wallets__label']}>Others</p>
                  <Link href="/" className={styles['wallets__item']}>
                    <Image src="/wallet/torus.svg" alt="torus" width={24} height={24} />
                    <p className={styles.name}>Torus</p>
                  </Link>
                  <Link href="/" className={styles['wallets__item']}>
                    <Image src="/wallet/portis.svg" alt="portis" width={24} height={24} />
                    <p className={styles.name}>Portis</p>
                  </Link>
                  <Link href="/" className={styles['wallets__item']}>
                    <Image src="/wallet/ether.svg" alt="ether" width={24} height={24} />
                    <p className={styles.name}>MyEtherWallet</p>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectWallet