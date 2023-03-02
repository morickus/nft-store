import styles from './Collections.module.scss'
import { nftCollectionsArray } from '../../../store'
import CollectionCard from '@/components/CollectionCard'
import MyCollectionsForm from '@/widgets/SearchForms/MyCollectionsForm'

const MyCollections = () => {
  return (
    <div className={styles.root}>
      <div className="wrapper-page">
        <h1 className={`title ${styles.title}`}>My Collections</h1>
        <div className={styles.form}>
          <MyCollectionsForm />
        </div>
        <div className={styles['wrapper-card']}>
          {[...nftCollectionsArray, ...nftCollectionsArray].map((i, index) => {
            if (index > 2) return
            return (
              <CollectionCard key={i.image} {...i} size="small" status={undefined} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCollections