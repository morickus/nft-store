import { FC } from 'react'
import { useRouter } from 'next/router'
import styles from './SideMenu.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { menuArray, sideMenuArray } from '../../../store'
import Icon from '@/components/Icon'
import { getCurPage } from '@/utils'

interface ISideMenu {
  visibleMobile: boolean
  onClose(): void
}

const SideMenu: FC<ISideMenu> = (props) => {
  const { visibleMobile, onClose } = props
  const router = useRouter()

  return (
    <div className={`${styles.root} ${visibleMobile && styles['visible-mobile']}`}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
          <Image src="/logo-text.svg" alt="logo" width={128} height={36} />
        </Link>
        <Icon name="close_outlined" className={styles.cross} onClick={onClose} />
      </div>
      <div className={styles.body}>
        <nav className={styles.menu}>
          {sideMenuArray.map((i, index) => (
            <Link key={index} href={i.href}>
              <div className={`${styles['menu__item']} ${getCurPage(router.asPath) == getCurPage(i.href) && styles.active}`}>
                <div className={styles.icon}>
                  <Icon name={i.icon} fontSize={20} />
                  <Icon name={i.iconActive} fontSize={20} color="white" />
                </div>
                <span className={styles.text}>{i.text}</span>
              </div>
            </Link>
          ))}
          <div className={styles['mobile-menu']}>
            <div className={styles.divider} />
            {menuArray.map((i, index) => (
              <Link key={index} href={i.href}>
                <div className={`${styles['menu__item']}`}>
                  <div className={styles.icon}>
                    <Icon name={i.icon} fontSize={20} />
                  </div>
                  <span className={styles.text}>{i.text}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
        <div className={styles.banner}>
          <Image src="/assets/bored-ape.jpg" alt="bored-ape" width={197} height={265} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu