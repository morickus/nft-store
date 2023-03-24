import styles from './Collections.module.scss'
import { nftCollectionsArray } from '../../../store'
import CollectionCard from '@/components/CollectionCard'
import Icon from '@/components/Icon'
import CollectionsForm from '@/widgets/SearchForms/CollectionsForm'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Button'), { ssr: false })

const Collections = () => {
  return (
    <div className={styles.root}>
      <div className="wrapper-page">
        <h1 className="title">Collections</h1>
        <div className={styles.form}>
          <CollectionsForm />
        </div>
        <div className={styles['my-collections']}>
          <div className={`${styles['wrapper-card']} ${styles['wrapper-card_top']}`}>
            {nftCollectionsArray.map((i, index) => {
              if (index > 4) return
              return (
                <CollectionCard key={i.image} {...i} size="small" className={styles.item} />
              )
            })}
          </div>
          <div className={styles['wrap-btn']}>
            <Button type="primary" className={styles['wrap-btn__btn']}>
              <Icon name="add-collection_filled" color="white" fontSize={18} />
              <span>Add my collections</span>
            </Button>
          </div>
        </div>
        <div>
          <div className={styles['wrapper-card']}>
            {[...nftCollectionsArray, ...nftCollectionsArray].map((i, index) => {
              if (index > 9) return
              return (
                <CollectionCard key={i.image} {...i} size="small" status={undefined} />
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

export default Collections