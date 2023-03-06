import { RcFile } from 'antd/es/upload/interface'

export const convertingCount = (count: number) => count > 999 ? `${`${count}`.substring(0, `${count}`.length - 3)}K` : count

export const cutWallet = (wallet: string, startCount = 10) => `${wallet.substring(0, startCount)}...${wallet.substring(wallet.length - 4)}`

export const getCurPage = (path: string) => {
  const res = path.split('/').filter(i => i !== '' && i !== 'private');
  return res[0];
}

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
};