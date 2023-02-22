import { FC, useState } from 'react'
import styles from './NftNested.module.scss'
import { IconNamesMap } from '@/components/Icon/types'
import Icon from '@/components/Icon'
import Image from 'next/image'

interface NestedItem {
  icon: IconNamesMap
  title: string
  subtitle: string
}

interface NestedNftItem {
  image: string
  title: string
  subtitle: string
}

export type Nested = NestedItem | NestedNftItem

interface INftNested {
  image: string
  nested: Nested[]
  panel?: {
    like: number
  }
}

const NftNested: FC<INftNested> = (props) => {
  const { image, nested, panel } = props
  const [nestedOpen, setNestedOpen] = useState(false)

  return (
    <div className={styles.root}>
      <div className={styles['top-side']}>
        <Image src={image} alt={image} width={550} height={600} />
        {panel && (
          <div className={styles.panel}>
            <div className={styles['panel__item']}>
              <Icon name="like_outlined" />
              <span>{panel.like}</span>
            </div>
            <div className={styles['panel__item']}>
              <Icon name="share_outlined" />
              <span>Share</span>
            </div>
            <div className={styles['panel__item']}>
              <Icon name="refresh_outlined" />
              <span>Refresh</span>
            </div>
            <div className={styles['panel__item']}>
              <Icon name="more-menu_filled" />
            </div>
          </div>
        )}
      </div>
      <div className={`${styles['bottom-side']} ${nestedOpen && styles.open}`}>
        <div className={styles.button} onClick={() => setNestedOpen(!nestedOpen)}>
          <span>Nested values</span>
          <Icon name="chevron-up-down_outlined" />
        </div>
        <div className={styles.dropdown}>
          <div className={styles['nested-wrap']}>
            {nested.map(i => {
              return 'image' in i ? (
                <div key={i.title} className={`${styles['nested-wrap__item']} ${styles['nested-wrap__item_image']}`}>
                  <Image className={styles.image} src={i.image} width={241} height={164} alt={i.image} />
                  <span className={styles.title}>{i.title}</span>
                  <p className={styles.subtitle}>{i.subtitle}</p>
                </div>
              ) : (
                <div key={i.title} className={styles['nested-wrap__item']}>
                  <Icon name={i.icon} className={styles.icon} />
                  <div>
                    <span className={styles.title}>{i.title}</span>
                    <p className={styles.subtitle}>{i.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftNested