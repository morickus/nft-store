import { FC, useState } from 'react'
import styles from './NftTradingModal.module.scss'
import Icon from '@/components/Icon'
import ChooseNft from '@/components/ChooseNft'
import { INft, IOwner, nftTradeItemsArray } from '../../../../store'
import Link from 'next/link'
import { cutWallet } from '@/utils'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'
import TemplateModal from '@/widgets/Modals/TemplateModal'
import dynamic from 'next/dynamic'

const InputNumber = dynamic(() => import('@/components/InputNumber'), { ssr: false })

interface INftTradingModal {
  tradeNft: INft | undefined
  setTradeNft(e: INft | undefined): void
}

const NftTradingModal: FC<INftTradingModal> = (props) => {
  const { tradeNft, setTradeNft } = props
  const [requestNft, setRequestNft] = useState<{me: INft, owner: INft}>()
  const [stepModal, setStepModal] = useState<'init' | 'success' | 'rejection'>('init')

  const defaultConditions = {first: true, second: true}
  const [conditions, setConditions] = useState(defaultConditions)

  const defaultTradeNftForm = {nftId: undefined, extraPay: undefined}
  const [tradeNftForm, setTradeNftForm] = useState<{nftId: undefined | number, extraPay: undefined | number}>(defaultTradeNftForm)

  const { nftId, extraPay } = tradeNftForm
  const nft = nftTradeItemsArray.find(i => i.id == nftId)

  const nftTrade: INft | { owner: IOwner } = nft ? {
    ...nft,
    owner: {
      ...nft?.owner,
      avatar: "/assets/avatar/avatar.png",
      wallet: '0x097df08623412412312312300hd'
    }
  } : {
    owner: {
      name: '',
      avatar: "/assets/avatar/avatar.png",
      wallet: '0x097df08623412412312312300hd'
    }
  }

  return (
    <>
      {tradeNft && (
        <TemplateModal
          width={630}
          open={!!tradeNft}
          title="NFT trading"
          onCancel={() => {
            // TODO: this is an example, delete
            if (stepModal == 'success') {
              // @ts-ignore
              setRequestNft({me: nftTrade, owner: tradeNft})
            }

            setStepModal('init')
            setConditions(defaultConditions)
            setTradeNftForm(defaultTradeNftForm)
            setTradeNft(undefined)
          }}
          icon={stepModal == 'success' ? 'success' : false}
          subtitle={<span className={styles['modal-subtitle']}><span>KaleidoKids #488</span><Icon name="trade_outlined-1" fontSize={18} color="grey" /><span>Otherdeed #666</span></span>}
          button={stepModal == 'success' ? true : <Button disabled={!conditions.first || !conditions.second || !nftId} onClick={() => setStepModal('success')} type="primary">Send an offer</Button>}
        >
          <div className={styles['content-wrap']}>
            <div className={styles['content-wrap__top']}>
              <div className={styles['nft-trade-wrap']}>
                <div className={styles['choose-nft-wrap']}>
                  {stepModal == 'success' ? (
                    <>
                      <ChooseNft nft={nftTrade} belong="Me" />
                      <p className={`${styles['choose-nft-wrap__text-extra-pay']} ${!extraPay && styles['color-grey']}`}>{!!extraPay ? Number(extraPay) > 0 ? '+' : '' : '±'}{extraPay || 0}&nbsp;ETH</p>
                    </>
                  ) : (
                    <>
                      <ChooseNft nft={nftTrade} belong="Me" edit={{myNft: nftTradeItemsArray, onSelectNft: (id: number) => setTradeNftForm(prev => ({...prev, nftId: id}))}} />
                      <InputNumber
                        size="small"
                        controls={false}
                        bordered={false}
                        placeholder="±0 ETH"
                        className={styles['choose-nft-wrap__input-extra-pay']}
                        value={tradeNftForm.extraPay ? tradeNftForm.extraPay : ''}
                        formatter={(value) => !!value ? `${Number(value) > 0 ? '+' : ''}${value || 0} ETH` : ''}
                        onChange={(value) => setTradeNftForm(prev => ({...prev, extraPay: value ? Number(value) : undefined}))}
                        parser={(value) => !!value ? Number(value!.replace(' ETH', '').replace('+', '')) : 0}
                      />
                      <Icon name="edit_filled" fontSize={16} color="primary" className={styles['edit-icon']} />
                    </>
                  )}
                </div>
                <Icon name="trade_outlined-1" fontSize={64} color="grey" className={styles['nft-trade-wrap__icon']} />
                <div className={styles['choose-nft-wrap']}>
                  <ChooseNft nft={tradeNft} belong="Owner" />
                  <p className={`${styles['choose-nft-wrap__text-extra-pay']} ${!tradeNft?.extraPay && styles['color-grey']}`}>
                    {tradeNft?.extraPay ? (tradeNft?.extraPay) > 0 ? '+' : '' : '±'}{tradeNft.extraPay || 0}&nbsp;ETH
                  </p>
                </div>
              </div>
            </div>
            {stepModal == 'success' ? (
              <p className={styles.text}>Your offer has been sent. We are waiting for a response from the user <Link href="/">{cutWallet(tradeNft.owner.wallet, 4)}.</Link></p>
            ) : (
              <div className={styles['checkbox-wrap']}>
                <Checkbox checked={conditions.first} onClick={() => setConditions(prev => ({...prev, first: !prev.first}))} label="There are enough tokens to exchange" />
                <Checkbox checked={conditions.second} onClick={() => setConditions(prev => ({...prev, second: !prev.second}))} label={<p>The selected nft will be passed to the user&nbsp;<Link href="/">{cutWallet(tradeNft.owner.wallet, 4)}</Link></p>} />
              </div>
            )}
          </div>
        </TemplateModal>
      )}
      {/*TODO: move modals*/}
      {!!requestNft && stepModal == 'init' && (
        <TemplateModal
          width={630}
          open={!!requestNft}
          title="NFT trading"
          onCancel={() => {
            setConditions(defaultConditions)
            setRequestNft(undefined)
          }}
          icon={false}
          subtitle={<span className={styles['modal-subtitle']}><span>KaleidoKids #488</span><Icon name="trade_outlined-1" fontSize={18} color="grey" /><span>Otherdeed #666</span></span>}
          button={(
            <div className={styles['wrap-button']}>
              <Button type="primary" safety className={styles['wrap-button__button']} disabled={!conditions.first || !conditions.second} onClick={() => {
                setConditions(defaultConditions)
                setStepModal('success')
              }}>I agree</Button>
              <Button type="primary" danger className={styles['wrap-button__button']} onClick={() => {
                setConditions(defaultConditions)
                setStepModal('rejection')
              }}>Not want</Button>
            </div>
          )}
        >
          <div className={styles['content-wrap']}>
            <div className={styles['content-wrap__top']}>
              <div className={styles['nft-trade-wrap']}>
                <div className={styles['choose-nft-wrap']}>
                  <ChooseNft nft={requestNft.me} belong="Me" />
                  <p className={`${styles['choose-nft-wrap__text-extra-pay']} ${!extraPay && styles['color-grey']}`}>{!!extraPay ? Number(extraPay) > 0 ? '+' : '' : '±'}{extraPay || 0}&nbsp;ETH</p>
                </div>
                <Icon name="trade_outlined-1" fontSize={64} color="grey" className={styles['nft-trade-wrap__icon']} />
                <div className={styles['choose-nft-wrap']}>
                  <ChooseNft nft={requestNft.owner} belong="Owner" />
                  <p className={`${styles['choose-nft-wrap__text-extra-pay']} ${!requestNft.owner.extraPay && styles['color-grey']}`}>
                    {requestNft.owner.extraPay ? (requestNft.owner.extraPay) > 0 ? '+' : '' : '±'}{requestNft.owner.extraPay || 0}&nbsp;ETH
                  </p>
                </div>
              </div>
              <div className={styles.alert}>
                <Icon name="alert_filled" color="red" fontSize={24} />
                <p>Attention! You exchange the nested <Link href="/">NFT (cryptofairies.com/nft/66211)</Link> for the nested <Link href="/">NFT (cryptofairies.com/nft/44761).</Link> If you agree, then accept the exchange.</p>
              </div>
            </div>
            <div className={styles['checkbox-wrap']}>
              <Checkbox checked={conditions.first} onClick={() => setConditions(prev => ({...prev, first: !prev.first}))} label="There are enough tokens to exchange" />
              <Checkbox checked={conditions.second} onClick={() => setConditions(prev => ({...prev, second: !prev.second}))} label={<p>The selected nft will be passed to the user&nbsp;<Link href="/">{cutWallet(requestNft.owner.owner.wallet, 4)}</Link></p>} />
            </div>
          </div>
        </TemplateModal>
      )}
      {!!requestNft && (stepModal == 'success' || stepModal == 'rejection') && (
        <TemplateModal
          width={630}
          button={true}
          open={!!requestNft}
          subtitle="Otherdeed #666"
          icon={stepModal == 'rejection' ? 'error' : 'success'}
          title={stepModal == 'rejection' ? 'Rejection' : 'Success'}
          text={stepModal == 'rejection' ? 'You canceled the exchange' : 'Congratulations! Now you are the owner of this NFT'}
          onCancel={() => {
            setStepModal('init')
            setRequestNft(undefined)
          }}
        >
          <ChooseNft nft={requestNft.owner} belong="Owner" className={styles['choose-nft']} />
        </TemplateModal>
      )}
    </>
  )
};

export default NftTradingModal