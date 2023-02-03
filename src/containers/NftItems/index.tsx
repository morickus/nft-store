import styles from './Nfts.module.scss'
import { nftItemsArray } from '../../../store'
import NftCard from '@/components/NftCard'
import Button from '@/components/Button'
import NftForm from '@/widgets/SearchForms/NftForm'

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
                <NftCard key={i.image} {...i} />
              )
            })}
          </div>
          <div className={styles['wrapper-button']}>
            <Button type="stroked" size="large">Load more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItems