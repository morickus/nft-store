import styles from './NftTrading.module.scss'
import { nftItemsArray } from '../../../store'
import NftCard from '@/components/NftCard'
import Button from '@/components/Button'
import NftForm from '@/widgets/SearchForms/NftForm'

const NftTrading = () => {
  return (
    <div className={styles.root}>
      <div className="wrapper-page">
        <h1 className="title">NFT trading</h1>
        <div className={styles.form}>
          <NftForm />
        </div>
        <div>
          <div className={styles['wrapper-card']}>
            {[...nftItemsArray].map((i, index) => (
              <NftCard key={index} {...i} />
            ))}
          </div>
          <div className={styles['wrapper-button']}>
            <Button size="large">Load more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftTrading