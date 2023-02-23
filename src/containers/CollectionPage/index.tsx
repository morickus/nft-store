import React from 'react'
import styles from './styles.module.scss'
import { collectionPage } from '../../../store'
import Image from 'next/image'
import IconButton from '@/components/IconButton'
import Button from '@/components/Button'

const CollectionPage = () => {
  const { banner, logo } = collectionPage

  return (
    <div className={styles.root}>
      <div className="wrapper-page">
        <div className={styles.header}>
          <div className={styles.banner}>
            <Image src={banner} alt={banner} layout="fill" className={styles.image} />
            <div className={styles.logo}>
              <Image src={logo} alt={logo} width={120} height={120} />
            </div>
            <div className={styles.control}>
              <div>
                <IconButton icon="fin-assets_filled" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="token_filled" colorIcon="default" sizeIcon={16} size={32} />
              </div>
              <div>
                <Button size="small" className={styles.btn}>Read more</Button>
                <IconButton icon="discord_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="facebook_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="twitter_solid" colorIcon="default" sizeIcon={16} size={32} />
              </div>
            </div>
          </div>
          <div className={styles.description}>

          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.tabs}></div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage