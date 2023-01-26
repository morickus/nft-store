import { FC, useState } from 'react'
import styles from './Header.module.scss'
import { menuArray } from '../../../store'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Bell from '@/components/Bell'
import Avatar from '@/components/Avatar'

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
            <Image src="/flags/en.png" alt="en" width={16} height={16} />
            <span>en</span>
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
    </div>
  );
};

export default Header;