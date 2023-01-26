import styles from './Home.module.scss'
import Button from '@/components/Button'
import { nftCollectionsArray, nftItemsArray, nftItemsTradingArray } from '../../../store'
import NftCard from '@/components/NftCard'
import CollectionCard from '@/components/CollectionCard'
import Footer from '@/widgets/Footer'

const Home = () => {
  return (
    <div>
      <section className={styles.main}>
        <div className={styles.background} />
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>Explore NFTs</h1>
            <p className={styles.text}>Our suite of Web 3.0 tools allows creators and brands to create verifiably unique, connected NFTs that bring utility and joy to their fans and collectors online and off.</p>
            <Button size="large">NFT store manual</Button>
          </div>
          <div className={styles['nft-items']}>
            <div className={styles['nft-items-wrapper']}>
              {nftItemsArray.map(i => (
                <NftCard key={i.number} {...i} />
              ))}
            </div>
            <Button type="stroked" size="large">all NFT items</Button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h4 className={styles.subtitle}>NFT collections</h4>
          <div className={styles.flex}>
            <div className={styles['nft-collections-wrapper']}>
              {nftCollectionsArray.map(i => (
                <CollectionCard key={i.image} {...i} />
              ))}
            </div>
            <Button type="stroked" size="large">all collections</Button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h4 className={styles.subtitle}>NFT on sale</h4>
          <div className={styles.flex}>
            <div className={styles['nft-items-wrapper']}>
              {nftItemsArray.map(i => (
                <NftCard key={i.number} {...i} />
              ))}
            </div>
            <Button type="stroked" size="large">view all</Button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h4 className={styles.subtitle}>NFT to trading</h4>
          <div className={styles.flex}>
            <div className={styles['nft-items-wrapper']}>
              {nftItemsTradingArray.map(i => (
                <NftCard key={i.number} {...i} />
              ))}
            </div>
            <Button type="stroked" size="large">view all</Button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <Footer />
      </section>
    </div>
  );
};

export default Home;