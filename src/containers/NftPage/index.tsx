import React, { useEffect, useState } from 'react'
import styles from './NftPage.module.scss'
import { useRouter } from 'next/router'
import NftNested from '@/components/NftNested'
import { nftPage } from '../../../store'
import Image from 'next/image'
import IconButton from '@/components/IconButton'
import Link from 'next/link'
import { cutWallet } from '@/utils'
import Button from '@/components/Button'
import RadioButton from '@/components/RadioButton'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'
import Icon from '@/components/Icon'
import TemplateModal from '@/widgets/Modals/TemplateModal'
import { Form, InputNumber, Radio } from 'antd'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import CheckCard from '@/components/CheckCard'
import Wallet from '@/components/Wallet'
import MintModal from '@/widgets/Modals/MintModal'

dayjs.extend(relativeTime)
dayjs.extend(utc);

const NftPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [sellNftForm] = Form.useForm()
  const [tradeNftForm] = Form.useForm()
  const [transferNftForm] = Form.useForm()
  const [purchaseNftForm] = Form.useForm()
  const [tab, setTab] = useState('overview')
  const [statusNft, setStatusNft] = useState<'sale'>()
  const priceValue = Form.useWatch('price', sellNftForm)
  const userIdValue = Form.useWatch('userId', transferNftForm)
  const conditionSellValue = Form.useWatch('condition', sellNftForm)
  const conditionTransferValue = Form.useWatch('condition', transferNftForm)
  const surchargeValue = Form.useWatch('surcharge', tradeNftForm)
  const nftIdValue = Form.useWatch('nftId', tradeNftForm)
  const exchangeValue = Form.useWatch('exchange', tradeNftForm)
  const conditionTradeValue = Form.useWatch('condition', tradeNftForm)
  const gasValue = Form.useWatch('gas', purchaseNftForm)
  const purchaseTradeValue = Form.useWatch('condition', purchaseNftForm)
  const { image, name, number, collection, owner, creator, price, description, bids, properties, like, nested, property, referral } = nftPage

  const [sellNftModal, setSellNftModal] = useState(false)
  const [sellNftSuccessModal, setSellNftSuccessModal] = useState(false)

  const [transferNftModal, setTransferNftModal] = useState(false)
  const [transferNftSuccessModal, setTransferNftSuccessModal] = useState(false)

  const [removeSellModal, setRemoveSellModal] = useState(false)
  const [removeSellSuccessModal, setRemoveSellSuccessModal] = useState(false)

  const defaultTradeNftValue = { main: false, nestedId: [] }
  const [tradeNftModal, setTradeNftModal] = useState(false)
  const [tradeNftValue, setTradeNftValue] = useState<{main: boolean, nestedId: number[]}>(defaultTradeNftValue)
  const [tradeNftFormModal, setTradeNftFormModal] = useState(false)
  const [tradeNftSuccessModal, setTradeNftSuccessModal] = useState(false)

  const [purchaseNftModal, setPurchaseNftModal] = useState(false)
  const [purchaseNftRejectModal, setPurchaseNftRejectModal] = useState(false)
  const [purchaseSuccessModal, setPurchaseSuccessModal] = useState(false)

  const gas = 0.2
  const recommended = 6

  useEffect(() => {
    if (exchangeValue == 'free-exchange') {
      tradeNftForm.resetFields(['nftId'])
    }
  }, [tradeNftForm, exchangeValue])

  return (
    <>
      <div className={styles.root}>
        <div className="container-page">
          <div className={styles.wrapper}>
            <div className={styles['left-side']}>
              <div className={styles.header}>
                <div className={styles['header__info']}>
                  <h1 className={styles.title}>{name} #{number}</h1>
                  <div className={styles['collection-wrap']}>
                    <Link href={`/collection/${collection.id}`} className={styles.collection}>
                      <Image src={collection.image} alt={collection.image} width={24} height={24} />
                      <span>{collection.name}</span>
                    </Link>
                    <div>
                      <IconButton icon="fin-assets_filled" sizeIcon={16} colorIcon="default" size={25} className={styles.icon} />
                      <IconButton icon="token_filled" sizeIcon={16} colorIcon="default" size={25} className={styles.icon} />
                    </div>
                  </div>
                  <div className={styles['user-wrap']}>
                    <div className={styles['user-wrap__user']}>
                      <Image src={owner.avatar} alt={owner.avatar} width={36} height={36} />
                      <div className={styles.text}>
                        <span>Owner</span>
                        <p>{cutWallet(owner.wallet)}</p>
                      </div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles['user-wrap__user']}>
                      <Image src={creator.avatar} alt={creator.avatar} width={36} height={36} />
                      <div className={styles.text}>
                        <span>Creator</span>
                        <p>{cutWallet(creator.wallet)}</p>
                      </div>
                    </div>
                  </div>
                  {(tab === 'overview' || tab === 'properties') ? (
                    <>
                      <div className={`${styles['price-wrap']} ${statusNft == 'sale' && styles['price-wrap_sale']}`}>
                        <div className={styles.item}>
                          <span className={styles.label}>Price</span>
                          <p>{price.eth} ETH</p>
                          <span>${price.dollar.toLocaleString('en')}</span>
                          <Button className={styles.btn} onClick={() => setRemoveSellModal(true)}>Remove</Button>
                        </div>
                        <div className={styles.item}>
                          <div>
                            <span className={styles.label}>Highest&nbsp;<span className={styles.black}>floor bid</span></span>
                            <p>{price.highestBid} wETH</p>
                            <span>by <span className={styles.link}>{cutWallet(price.highestBidBy)}</span></span>
                            <Button type="primary" className={styles.btn}>Reply to offer</Button>
                          </div>
                        </div>
                      </div>
                      <div className={styles['buttons-price-wrap']}>
                        <Button type="primary" onClick={() => setPurchaseNftModal(true)}>ButNow for {price.eth} ETH</Button>
                        <IconButton icon="cart_filled" sizeIcon={18} />
                        <Button>Place a bid</Button>
                      </div>
                    </>
                  ) : (
                    <div className={styles['buttons-active-wrap']}>
                      <div className={`${styles['buttons-active-wrap__item']} ${styles['primary']}`} onClick={() => setSellNftModal(true)}>
                        <span>Sell</span>
                        <Icon name="token_filled" />
                      </div>
                      <div className={`${styles['buttons-active-wrap__item']} ${styles['blue']}`} onClick={() => setTransferNftModal(true)}>
                        <span>Transfer</span>
                        <Icon name="arrow-right_outlined" />
                      </div>
                      <div className={`${styles['buttons-active-wrap__item']} ${styles['green']}`} onClick={() => setTradeNftModal(true)}>
                        <span>Trade</span>
                        <Icon name="trade_outlined" />
                      </div>
                      <div className={`${styles['buttons-active-wrap__item']} ${styles['red']}`}>
                        <span>Burn</span>
                        <Icon name="fire_filled" />
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles['header__image']}>
                  <NftNested image={image} nested={nested} panel={{like}} />
                </div>
              </div>
              <div className={styles['content-wrap']}>
                <div className={styles['tabs']}>
                  <RadioButton
                    buttons={
                      [
                        {text: 'Overview', value: 'overview'},
                        {text: 'Properties', value: 'properties'},
                        {text: 'Bids', value: 'bids'},
                        {text: 'History', value: 'history'}
                      ]
                    }
                    onChange={(e) => setTab(e.target.value)}
                    value={tab}
                  />
                </div>
                <div className={styles.content}>
                  {tab === 'overview' && (
                    <div className={styles.block}>
                      <span className={styles.title}>Description</span>
                      <p className={styles.text}>{description}</p>
                      <Button size="small">View all</Button>
                    </div>
                  )}
                  {tab === 'properties' && (
                    <div className={styles.properties}>
                      {properties.map(i => (
                        <div key={i.label} className={styles['properties__item']}>
                          <div className={styles['left-side']}>
                            <Image src={i.image} alt={i.image} width={24} height={24} />
                            <div className={styles.info}>
                              <span>{i.label}</span>
                              <p>{i.text}</p>
                            </div>
                          </div>
                          <p className={styles.value}>{i.value}%</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {(tab === 'overview' || tab === 'bids' || tab === 'history') && (
                    <div className={styles.block}>
                      <span className={styles.title}>{tab === 'history' ? 'History' : 'Latest bids'}</span>
                      <div className={styles['bids-wrap']}>
                        {bids.map(i => (
                          <div key={i.created_at} className={`${styles['bids-wrap__item']} ${statusNft == 'sale' && styles['bids-wrap__item_sale']}`}>
                            <div className={styles.user}>
                              <Image src={i.user.avatar} alt={i.user.avatar} width={36} height={36} className={styles.avatar} />
                              <div className={styles.info}>
                                <span>{i.user.name}&nbsp;{tab === 'history' && (<span className={styles.for}>listed for</span>)}</span>
                                <p>{cutWallet(i.user.wallet)}</p>
                              </div>
                            </div>
                            {tab === 'history' ? (
                              <span className={styles.date}>{dayjs.unix(i.created_at).utc().format('DD.MM.YYYY, hh:mm')}</span>
                            ) : (
                              <span className={styles.date}>{dayjs().to(dayjs.unix(i.created_at))}</span>
                            )}
                            <div className={styles.price}>
                              <span>{i.price.wEth} wETH</span>
                              <p>${i.price.dollar.toLocaleString('en')}</p>
                            </div>
                            <Button type="primary" size="small" className={styles.btn}>Reply to offer</Button>
                          </div>
                        ))}
                      </div>
                      <Button size="small">View all</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles['right-side']}>
              <NftNested image={image} nested={nested} panel={{like}} />
            </div>
          </div>
        </div>
      </div>
      {sellNftModal && (
        <TemplateModal
          width={604}
          icon={false}
          button={false}
          title="NFT Sale"
          open={sellNftModal}
          subtitle="Kaleido Kids #488"
          onCancel={() => {
            sellNftForm.resetFields()
            setSellNftModal(false)
          }}
        >
          <Form
            form={sellNftForm}
            className={styles['nft-form']}
            initialValues={{condition: true}}
            onFinish={() => {
              // TODO: replace static
              setStatusNft('sale')

              sellNftForm.resetFields()
              setSellNftSuccessModal(true)
              setSellNftModal(false)
              setTab('overview')
            }}
          >
            <Form.Item name="price">
              <InputNumber
                min={0}
                size="large"
                controls={false}
                placeholder="0.1 ETH for 1 NFT"
                className={styles['input']}
                formatter={(value) => !!value ? `${value || 0} ETH` : ''}
                // @ts-ignore
                parser={(value) => !!value ? Number(value!.replace(' ETH', '')) : 0}
                prefix={<>
                  <Icon name="token_filled" fontSize={24} color={priceValue ? 'primary' : 'grey'} className="mr-16" />
                  <div className="after-input-number">
                    <div className="expression">
                      <div className="expression__item">
                        <span className="expression__label">total</span>
                        <p className="expression__value">{(priceValue || 0) + gas}</p>
                      </div>
                      <div className="expression__item">
                        <span className="expression__label"/>
                        <p className="expression__value">=</p>
                      </div>
                      <div className="expression__item">
                        <span className="expression__label">price</span>
                        <span className="expression__value">{priceValue || 0}</span>
                      </div>
                      <div className="expression__item">
                        <span className="expression__label"/>
                        <p className="expression__value">+</p>
                      </div>
                      <div className="expression__item">
                        <span className="expression__label">count</span>
                        <p className="expression__value">{gas}</p>
                      </div>
                    </div>
                  </div>
                </>}
              />
            </Form.Item>
            <Form.Item name="condition" valuePropName="checked" className={styles['checkbox']}>
              <Checkbox label={<p>You confirm that when you sell the NFT, you will lose it.  You agree to all <Link href="/">policies</Link> and <Link href="/">blah blah blah.</Link></p>} />
            </Form.Item>
            <Button disabled={(priceValue || 0) <= 0 || !conditionSellValue} type="primary" htmlType="submit">Sell for {(priceValue || 0) + gas} ETH</Button>
          </Form>
        </TemplateModal>
      )}
      {sellNftSuccessModal && (
        <TemplateModal
          width={604}
          icon="success"
          title="NFT up for sale"
          open={sellNftSuccessModal}
          subtitle="Kaleido Kids #488"
          onCancel={() => setSellNftSuccessModal(false)}
          text={<>Your NFT is for sale. You can view the NFT <br/>page on the market.</>}
        />
      )}
      {transferNftModal && (
        <TemplateModal
          width={626}
          icon={false}
          button={false}
          title="NFT Transfer"
          open={transferNftModal}
          subtitle="Kaleido Kids #488"
          onCancel={() => {
            transferNftForm.resetFields()
            setTransferNftModal(false)
          }}
        >
          <Form form={transferNftForm} className={styles['nft-form']} initialValues={{condition: true}} onFinish={() => {
            transferNftForm.resetFields()
            setTransferNftSuccessModal(true)
            setTransferNftModal(false)
          }}>
            <Form.Item name="userId">
              <Input
                size="large"
                placeholder="USER ID"
                className={styles['input']}
                prefix={<Icon name="user-profile_filled" fontSize={24} color={userIdValue ? 'primary' : 'grey'} className="mr-16" />}
              />
            </Form.Item>
            <Form.Item name="condition" valuePropName="checked" className={styles['checkbox']}>
              <Checkbox label={<p>You confirm that when you sell the NFT, you will lose it.  You agree to all <Link href="/">policies</Link> and <Link href="/">blah blah blah.</Link></p>} />
            </Form.Item>
            <Button disabled={!userIdValue || !conditionTransferValue} type="primary" htmlType="submit">Transfer</Button>
          </Form>
        </TemplateModal>
      )}
      {transferNftSuccessModal && (
        <TemplateModal
          width={626}
          icon="success"
          subtitle="Kaleido Kids #488"
          open={transferNftSuccessModal}
          title="NFT has been transferred"
          onCancel={() => setTransferNftSuccessModal(false)}
          text={<>Your NFT has been passed to the user <Link href="/">0x000...20df.</Link><br/>You can view it from this user.</>}
        />
      )}
      {removeSellModal &&(
        <TemplateModal
          width={604}
          icon={false}
          title="Remove sale"
          open={removeSellModal}
          subtitle="Kaleido Kids #488"
          onCancel={() => setRemoveSellModal(false)}
          button={<Button type="primary" onClick={() => {
            setRemoveSellModal(false)
            setRemoveSellSuccessModal(true)
          }}>Remove from sale</Button>}
          text={<>Do you really want to remove your NFT from sale?<br/><br/>If this NFT is listed on other platforms, you must <br/>manually check and cancel it there as well. You can <br/>put it on sale anytime.</>}
        />
      )}
      {removeSellSuccessModal && (
        <TemplateModal
          width={604}
          icon="success"
          title="Remove sale"
          subtitle="Kaleido Kids #488"
          open={removeSellSuccessModal}
          text="Your NFT was taken down from sale."
          onCancel={() => setRemoveSellSuccessModal(false)}
        />
      )}
      {tradeNftModal && (
        <TemplateModal
          width={1300}
          icon={false}
          title="NFT Trade"
          open={tradeNftModal}
          subtitle="Kaleido Kids #488"
          onCancel={() => {
            setTradeNftValue(defaultTradeNftValue)
            setTradeNftModal(false)
          }}
          button={false}
        >
          <div className={styles['nft-trade-modal']}>
            <p className={styles['nft-trade-modal__title']}>Choose what you want to trade</p>
            <div className={styles['nft-trade-modal__wrap']}>
              <div className={styles['left-side']}>
                <div className={styles['left-side__header']}>
                  <p>Main NFT</p>
                </div>
                <CheckCard
                  checked={tradeNftValue?.main}
                  className={styles['left-side__body']}
                  onClick={() => setTradeNftValue(prev => ({...prev, main: !prev?.main}))}
                >
                  <Image src={image} alt={image} width={602} height={516} />
                </CheckCard>
              </div>
              <div className={styles['right-side']}>
                <div className={styles['right-side__header']}>
                  <p>Nested NFT</p>
                </div>
                <div className={styles['nested-wrap']}>
                  {nested.map(i => {
                    const check = tradeNftValue.nestedId.some(e => e == i.id)
                    return (
                      <CheckCard
                        key={i.id}
                        checked={check}
                        onClick={() => setTradeNftValue(prev => ({
                          ...prev,
                          nestedId: check ? prev.nestedId.filter(e => e != i.id) : [...prev.nestedId, i.id]
                        }))}
                      >
                        {'image' in i ? (
                          <div key={i.title} className={`${styles['nested-wrap__item']} ${styles['nested-wrap__item_image']}`}>
                            <Image className={styles.image} src={i.image} width={172} height={130} alt={i.image} />
                            <span className={styles.title}>{i.title}</span>
                            <p className={styles.subtitle}>{i.subtitle}</p>
                          </div>
                        ) : (
                          <div key={i.title} className={styles['nested-wrap__item']}>
                            <Icon name={i.icon} className={styles.icon} fontSize={56} color="grey" />
                            <div>
                              <span className={styles.title}>{i.title}</span>
                              <p className={styles.subtitle}>{i.subtitle}</p>
                            </div>
                          </div>
                        )
                        }
                      </CheckCard>
                    )
                  })}
                </div>
              </div>
            </div>
            <Button
              size="small"
              type="primary"
              disabled={!tradeNftValue.main && tradeNftValue.nestedId.length == 0}
              onClick={() => {
                setTradeNftModal(false)
                setTradeNftFormModal(true)
              }}
            >
              Continue
            </Button>
          </div>
        </TemplateModal>
      )}
      {tradeNftFormModal && (
        <TemplateModal
          width={626}
          icon={false}
          title="NFT Trade"
          open={tradeNftFormModal}
          subtitle="Kaleido Kids #488"
          onBack={() => {
            setTradeNftModal(true)
            setTradeNftFormModal(false)
          }}
          onCancel={() => {
            setTradeNftValue(defaultTradeNftValue)
            setTradeNftFormModal(false)
          }}
          button={false}
        >
          <Form
            form={tradeNftForm}
            className={styles['nft-form']}
            initialValues={{condition: true, extra: 'i-pay-extra', exchange: 'to-another-nft'}}
            onFinish={() => {
              tradeNftForm.resetFields()
              setTradeNftValue(defaultTradeNftValue)
              setTradeNftFormModal(false)
              setTradeNftSuccessModal(true)
            }}
          >
            <p className={styles['nft-form__subtitle']}>You chose Nested NFT - <Link href="/">Kaleido Kids #514</Link></p>
            <Form.Item name="extra">
              <RadioButton
                className={styles['nft-form__tabs']}
                buttons={
                  [
                    {text: 'I pay extra', value: 'i-pay-extra'},
                    {text: 'Pay me extra', value: 'pay-me-extra'}
                  ]
                }
              />
            </Form.Item>
            <Form.Item name="surcharge">
              <InputNumber
                min={0}
                size="large"
                controls={false}
                placeholder="Surcharge"
                className={styles['input']}
                formatter={(value) => !!value ? `${value || 0} ETH` : ''}
                // @ts-ignore
                parser={(value) => !!value ? Number(value!.replace(' ETH', '')) : 0}
                prefix={<Icon name="token_filled" fontSize={24} color={surchargeValue ? 'primary' : 'grey'} className="mr-16" />}
              />
            </Form.Item>
            <div />
            <Form.Item name="exchange">
              <RadioButton
                className={styles['nft-form__tabs']}
                buttons={
                  [
                    {text: 'To another NFT', value: 'to-another-nft'},
                    {text: 'Free exchange', value: 'free-exchange'}
                  ]
                }
              />
            </Form.Item>
            <Form.Item name="nftId">
              <Input
                size="large"
                placeholder="NFT ID"
                className={styles['input']}
                disabled={exchangeValue == 'free-exchange'}
                prefix={<Icon name="image_solid" fontSize={24} color={nftIdValue ? 'primary' : 'grey'} className="mr-16" />}
              />
            </Form.Item>
            <Form.Item name="condition" valuePropName="checked" className={styles['checkbox']}>
              <Checkbox label={<p>You confirm that when you sell the NFT, you will lose it. You agree to all <Link href="/">policies</Link> and <Link href="/">blah blah blah.</Link></p>} />
            </Form.Item>
            <Button disabled={!surchargeValue || !conditionTradeValue || (exchangeValue !== 'free-exchange' && !nftIdValue)} type="primary" htmlType="submit" className={styles.submit}>Transfer</Button>
          </Form>
        </TemplateModal>
      )}
      {tradeNftSuccessModal && (
        <TemplateModal
          width={626}
          icon="success"
          title={<>NFT is exposed <br/>to free trade</>}
          subtitle="Kaleido Kids #488"
          open={tradeNftSuccessModal}
          text={<>Your NFT is exposed to free trade. <br/>Check it out on the <Link href="/">NFT trade page.</Link></>}
          onCancel={() => setTradeNftSuccessModal(false)}
        />
      )}
      {purchaseNftModal && (
        <TemplateModal
          width={604}
          icon={false}
          button={false}
          title="NFT Purchase"
          open={purchaseNftModal}
          subtitle="Kaleido Kids #488"
          onCancel={() => {
            purchaseNftForm.resetFields()
            setPurchaseNftModal(false)
          }}
        >
          <Form form={purchaseNftForm} className={styles['nft-form']} initialValues={{condition: true}} onFinish={() => {
            // if reject setPurchaseNftRejectModal

            purchaseNftForm.resetFields()
            setPurchaseSuccessModal(true)
            setPurchaseNftModal(false)
          }}>
            <p className={styles['nft-form__subtitle']}>You are about to purchase a <Link href="/">Kaleido Kids #488</Link> from <Link href="/">0x10c41a3e9...4322</Link></p>
            <Wallet />
            <Form.Item name="gas">
              <InputNumber
                min={0}
                size="large"
                controls={false}
                placeholder="Gas cost"
                className={styles['input']}
                formatter={(value) => !!value ? `${value || 0} ETH` : ''}
                // @ts-ignore
                parser={(value) => !!value ? Number(value!.replace(' ETH', '')) : 0}
                prefix={<>
                  <Icon name="token_filled" fontSize={24} color={gasValue ? 'primary' : 'grey'} className="mr-16" />
                  <div className="after-input-number">
                    <p className={styles['input__after-text']}>{recommended} recommended</p>
                  </div>
                </>}
              />
            </Form.Item>
            <Form.Item name="condition" valuePropName="checked" className={styles['checkbox']}>
              <Checkbox label={<p>You confirm that when you sell the NFT, you will lose it.  You agree to all <Link href="/">policies</Link> and <Link href="/">blah blah blah.</Link></p>} />
            </Form.Item>
            <Button disabled={!purchaseTradeValue} type="primary" htmlType="submit" className={styles.submit}>Buy for {price.eth} ETH</Button>
          </Form>
        </TemplateModal>
      )}
      {purchaseNftRejectModal && (
        <TemplateModal
          width={626}
          icon="warning"
          title="Not enough tokens"
          open={purchaseNftRejectModal}
          text={<>There are not enough funds to purchase NFT. <br/>Please top up your wallet.</>}
          onCancel={() => setPurchaseNftRejectModal(false)}
        />
      )}
      {purchaseSuccessModal && (
        <MintModal
          open={purchaseSuccessModal}
          onCancel={() => setPurchaseSuccessModal(false)}
          heading="Successfully"
          label="You have acquired NFT"
          text="You have acquired NFT Kaleido Kids #488. Check NFT out in your collections."
          name={name}
          image={image}
          // nested={nested}
          property={property}
          referral={referral}
        />
      )}
    </>
  );
};

export default NftPage