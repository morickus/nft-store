import styles from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo-text.svg" alt="logo" width={128} height={36} />
        </Link>
        <div className={styles['social-wrap']}>
          <Link href="/" className={`${styles.social} ${styles.twitter}`} />
          <Link href="/" className={`${styles.social} ${styles.instagram}`} />
          <Link href="/" className={`${styles.social} ${styles.facebook }`} />
          <Link href="/" className={`${styles.social} ${styles.discord}`} />
          <Link href="/" className={`${styles.social} ${styles.m}`} />
          <Link href="/" className={`${styles.social} ${styles.linkedin}`} />
          <Link href="/" className={`${styles.social} ${styles.arrow}`} />
          <Link href="/" className={`${styles.social} ${styles.opensea}`} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.group}>
          <span className={styles.title}>Socials</span>
          <div className={styles.links}>
            <Link href="/">Crypto Fireworks</Link>
            <Link href="/">WP</Link>
            <Link href="/">Rules of the game</Link>
            <Link href="/">DAO</Link>
            <Link href="/">Locations</Link>
            <Link href="/">Quests</Link>
          </div>
        </div>
        <div className={styles.group}>
          <span className={styles.title}>Documents</span>
          <div className={styles.links}>
            <Link href="/">Exchange of fabulous merchandise</Link>
            <Link href="/">Generating a fabulous income</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Buying NFT on Marketplace</Link>
            <Link href="/">NFT Battle</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer