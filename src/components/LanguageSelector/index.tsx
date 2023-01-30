import { FC } from 'react'
import styles from './LanguageSelector.module.scss'
import Image from 'next/image'

interface ILanguageSelector {
  wrapper?: (children: JSX.Element) => JSX.Element
}

const LanguageSelector: FC<ILanguageSelector> = (props) => {
  const { wrapper } = props

  const render = (
    <div className={styles.root}>
      <Image src="/flags/en.png" alt="en" width={16} height={16} />
      <span>en</span>
    </div>
  )

  return wrapper ? wrapper(render) : render
};

export default LanguageSelector