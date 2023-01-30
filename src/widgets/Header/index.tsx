import { FC, useState } from 'react'
import styles from './Header.module.scss'
import { menuArray } from '../../../store'
import Link from 'next/link'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Bell from '@/components/Bell'
import Avatar from '@/components/Avatar'
import LanguageSelector from '@/components/LanguageSelector'
import Image from 'next/image'
import Switch from '@/components/Switch'

interface IHeader {
  onClickBurger(): void
}

const Header: FC<IHeader> = (props) => {
  const { onClickBurger } = props
  const [userMenu, setUserMenu] = useState(false)

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={`${styles['left-side']} ${userMenu && styles['user-menu']}`}>
          <Icon name="menu_filled" className={styles.burger} onClick={onClickBurger} />
          <nav className={styles.menu}>
            {menuArray.map(i => (
              <Link key={i.href} href={i.href} className={styles['menu__item']}>{i.text}</Link>
            ))}
          </nav>
        </div>
        <div className={`${styles['right-side']} ${userMenu && styles['user-menu']}`}>
          <div className={styles['language-selector']}>
            <LanguageSelector />
          </div>
          <div className={styles['balance-view']}>
            <Icon name="wallet_stroke" className={styles.icon} />
            <span>0,04 ETH</span>
          </div>
          <Button size="small">Wallet</Button>
          <div className={styles.personal}>
            <Bell count={12} />
            <Avatar
              online={true}
              src="/assets/avatar/avatar.png"
              className={styles.avatar}
              onClick={() => setUserMenu(!userMenu)}
            />
            <span className={styles.name}>Djasper</span>
            <Icon name="logout_outlined" color="primary" className={styles.logout} />
          </div>
        </div>
      </div>
      <div className={`${styles['user-menu-wrap']} ${userMenu && styles.active}`}>
        <div className={styles.top}>
          <div className={styles['create-links']}>
            <Link href="/" className={styles['create-links__link']}>
              <div className={styles['left-side']}>
                <Icon name="collections_solid" className={styles.icon} />
                <span className={styles.text}>Create collection</span>
              </div>
              <Icon name="plus_outlined" className={styles.icon} />
            </Link>
            <Link href="/" className={styles['create-links__link']}>
              <div className={styles['left-side']}>
                <Icon name="image_solid" className={styles.icon} />
                <span className={styles.text}>Create NFT item</span>
              </div>
              <Icon name="plus_outlined" className={styles.icon} />
            </Link>
          </div>
          <nav className={styles.menu}>
            <Link href="/" className={styles['menu__item']}>
              <span className={styles.text}>Profile</span>
              {/*<div className={styles.activity} />*/}
            </Link>
            <Link href="/" className={styles['menu__item']}>
              <span className={styles.text}>My collections</span>
              {/*<div className={styles.activity} />*/}
            </Link>
            <Link href="/" className={styles['menu__item']}>
              <span className={styles.text}>Activities</span>
              {/*<div className={styles.activity} />*/}
            </Link>
            <Link href="/" className={styles['menu__item']}>
              <span className={styles.text}>Favourites</span>
              <div className={styles.activity} />
            </Link>
            <Link href="/" className={styles['menu__item']}>
              <span className={styles.text}>Offers</span>
              <div className={styles.activity} />
            </Link>
            <Link href="/" className={styles['menu__item']}>
              <span className={styles.text}>Chat</span>
              {/*<div className={styles.activity} />*/}
            </Link>
            <LanguageSelector wrapper={(children: JSX.Element) => (
              <div className={styles['menu__item']}>
                <span className={styles.text}>Language</span>
                {children}
              </div>
            )} />
          </nav>
        </div>
        <div className={styles.bottom}>
          <div className={styles['wallet-wrap']}>
            <div className={styles.header}>
              <div className={styles['left-side']}>
                <Image src="/fox.svg" alt="fox" width={24} height={24} />
                <div className={styles.text}>
                  <span className={styles.name}>Ethereum</span>
                  <span className={styles.number}>0x6d...d0hh</span>
                </div>
              </div>
              <div className={styles['right-side']}>
                <div className={styles.button}>
                  <span>Copy</span>
                </div>
              </div>
            </div>
            <div className={styles.body}>
              <span className={styles.name}>Ethereum</span>
              <div className={styles.wallet}>
                <div className={styles['wallet__item']}>
                  <div className={styles.balance}>
                    <Icon name="token_filled" className={styles.icon} />
                    <span>134.1 ETH</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className={styles['wallet__item']}>
                  <div className={styles.balance}>
                    <Icon name="token_filled" className={styles.icon} color="pink" />
                    <span>1233.5 wETH</span>
                  </div>
                  <Switch />
                </div>
              </div>
              <div className={styles.button}>
                <span>Другие сети</span>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles['buttons__item']}>
              <span className={styles.text}>Подключить</span>
              <Icon name="plus_outlined" className={styles.icon} />
            </div>
            <div className={styles['buttons__item']}>
              <span className={styles.text}>Сменить</span>
              <Icon name="change-wallet_outlined" className={styles.icon} />
            </div>
            <div className={styles['buttons__item']}>
              <Icon name="settings_outlined" className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;