import styles from './Home.module.scss'
import Button from '@/components/Button'
import { nftCollectionsArray, nftItemsArray, nftItemsTradingArray, users } from '../../../store'
import NftCard from '@/components/NftCard'
import CollectionCard from '@/components/CollectionCard'
import Image from 'next/image'
import UserFollow from '@/components/UserFollow'
import RadioButton from '@/components/RadioButton'

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
        <div className="container">
          <div className={styles['top-users-wrap']}>
            <div className={styles.header}>
              <h4 className={styles.subtitle}>TOP users</h4>
              <div className={styles.buttons}>
                <RadioButton
                  buttons={
                    [
                      {text: 'Followers', value: 'followers'},
                      {text: 'Profit', value: 'profit'},
                      {text: 'Collection popularity', value: 'collection-popularity'}
                    ]
                  }
                  defaultValue="followers"
                />
                <span className={styles.label}>/ mounth</span>
              </div>
            </div>
            <div className={styles['top-users']}>
              <div className={styles['top-users__item']}>
                <div className={styles.medal}>
                  <Image src="/golden-medal.png" alt="golden-medal" width={50} height={50} />
                </div>
                <div className={styles.content}>
                  <div className={styles.users}>
                    <UserFollow
                      image="/assets/avatar/avatar-12.png"
                      className={styles.user}
                      follow={26000}
                      name="KK Man"
                    />
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.profit}>
                    <span>+16k fllws</span>
                    <span className={styles.percent}>+160%</span>
                  </div>
                </div>
              </div>
              <div className={styles['top-users__item']}>
                <div className={styles.medal}>
                  <Image src="/silver-medal.png" alt="silver-medal" width={36} height={36} />
                </div>
                <div className={styles.content}>
                  <div className={styles.users}>
                    <UserFollow
                      image="/assets/avatar/avatar-10.png"
                      className={styles.user}
                      follow={15000}
                      name="LIRONA"
                    />
                    <UserFollow
                      image="/assets/avatar/avatar-11.png"
                      className={styles.user}
                      follow={12000}
                      name="OCENE"
                    />
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.profit}>
                    <span>+8k fllws / +7k fllws</span>
                    <span className={styles.percent}>+78%<span>&nbsp;/&nbsp;</span>+76%</span>
                  </div>
                </div>
              </div>
              <div className={styles['top-users__item']}>
                <div className={styles.medal}>
                  <Image src="/bronze-medal.png" alt="bronze-medal" width={36} height={36} />
                </div>
                <div className={styles.content}>
                  <div className={styles.users}>
                    <UserFollow
                      image="/assets/avatar/avatar-7.png"
                      className={styles.user}
                      follow={10000}
                      name="Scam likely"
                    />
                    <UserFollow
                      image="/assets/avatar/avatar-8.png"
                      className={styles.user}
                      follow={9000}
                      name="KK Man"
                    />
                    <UserFollow
                      image="/assets/avatar/avatar-9.png"
                      className={styles.user}
                      follow={7000}
                      name="KK Man"
                    />
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.profit}>
                    <span>+4k fllws / +3.5k fllws / +3.5 fllws </span>
                    <span className={styles.percent}>+40%<span>&nbsp;/&nbsp;</span>+ 35%<span>&nbsp;/&nbsp;</span>+50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.attention}>
            <div className={styles.head}>
              <h5 className={styles.title}>They deserve attention</h5>
              <div className={styles.buttons}>
                <RadioButton buttons={[{text: 'Top 12', value: '12'}, {text: 'Top 100', value: '100'}]} defaultValue="12" />
              </div>
            </div>
            <div className={styles.flex}>
              <div className={styles['users-wrapper']}>
                {users.map((i, index) => (
                  <UserFollow key={index} {...i} />
                ))}
              </div>
              <Button type="stroked" size="large">view all</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home