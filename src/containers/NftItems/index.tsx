import styles from './NftItems.module.scss'
import { nftItemsArray } from '../../../store'
import NftCard from '@/components/NftCard'
import NftForm from '@/widgets/SearchForms/NftForm'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Button'), { ssr: false })

const NftItems = () => {
  return (
    <div className={styles.root}>
      <div className="wrapper-page">
        <h1 className="title">NFTs</h1>
        <div className={styles.form}>
          <NftForm />
        </div>
        <div>
          <div className={styles['wrapper-card']}>
            {[...nftItemsArray, ...nftItemsArray].map((i, index) => {
              if (index > 9) return
              return (
                <NftCard key={index} {...i} />
              )
            })}
          </div>
          <div className={styles['wrapper-button']}>
            <Button size="large">Load more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItems