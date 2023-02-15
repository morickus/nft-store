export const convertingCount = (count: number) => count > 999 ? `${`${count}`.substring(0, `${count}`.length - 3)}K` : count

export const cutWallet = (wallet: string) => `${wallet.substring(0, 10)}...${wallet.substring(wallet.length - 4)}`

export const getCurPage = (path: string) => {
  const res = path.split('/').filter(i => i !== '' && i !== 'private');
  return res[0];
}