import { nftTradeItemsArray } from '../../../store'
import NftForm from '@/widgets/SearchForms/NftForm'
import styles from './NftAuction.module.scss'
import NftCard from '@/components/NftCard'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Button'), { ssr: false })

const NftAuction = () => {
  return (
    <>
      <div className={styles.root}>
        <div className="wrapper-page">
          <h1 className="title">NFTs auction</h1>
          <div className={styles.form}>
            <NftForm />
          </div>
          <div>
            <div className={styles['wrapper-card']}>
              {[...nftTradeItemsArray].map((i, index) => {
                const { auction } = i
                if (auction) {
                  return (
                    <NftCard key={index} type="auction" {...i} {...auction} />
                  )
                }
              })}
            </div>
            <div className={styles['wrapper-button']}>
              <Button size="large">Load more</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftAuction