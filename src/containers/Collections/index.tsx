import styles from './Collections.module.scss'
import { nftCollectionsArray } from '../../../store'
import CollectionCard from '@/components/CollectionCard'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import CollectionsForm from '@/widgets/SearchForms/CollectionsForm'

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
            <Button size="medium">
              <Icon name="add-collection_filled" color="white" className={styles.icon} />
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
            <Button type="stroked" size="large">Load more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections