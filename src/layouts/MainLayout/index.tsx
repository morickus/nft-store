import { FC, PropsWithChildren, useState } from 'react'
import styles from './MainLayout.module.scss'
import SideMenu from '@/widgets/SideMenu'
import Header from '@/widgets/Header'

const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [visibleSideMenu, setVisibleSideMenu] = useState(false)

  return (
    <div>
      <Header onClickBurger={() => setVisibleSideMenu(true)} />
      <SideMenu visibleMobile={visibleSideMenu} onClose={() => setVisibleSideMenu(false)} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout