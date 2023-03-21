import React, { useRef, useState } from 'react'
import styles from './CollectionPage.module.scss'
import { collectionPage, propsType } from '../../../store'
import Image from 'next/image'
import IconButton from '@/components/IconButton'
import Button from '@/components/Button'
import Link from 'next/link'
import { cutWallet } from '@/utils'
import Icon from '@/components/Icon'
import RadioButton from '@/components/RadioButton'
import { useRouter } from 'next/router'
import NftCard from '@/components/NftCard'
import Modal from '@/components/Modal'
import { Form, InputNumber } from 'antd'
import MintModal from '@/widgets/Modals/MintModal'

const CollectionPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [form] = Form.useForm()
  const countMint = Form.useWatch('count', form)
  const priceMint = Form.useWatch('price', form)
  const [tab, setTab] = useState('items')
  const reWrapper = useRef<HTMLDivElement>(null)
  const [isReadMore, setIsReadMore] = useState(false)
  const [isMint, setIsMint] = useState(false)
  const [isCongratulation, setIsCongratulation] = useState(false)
  const { banner, logo, title, subtitle, creator, smart, props, text, price, items, description, aboutProject, team, congratulation } = collectionPage

  type keys = keyof propsType

  return (
    <div className={styles.root}>
      <div className="wrapper-page" ref={reWrapper}>
        <div className={styles['sticky-wrap']} style={{height: `${reWrapper.current?.clientHeight}px`}}>
          <div className={styles['sticky']}>
            <div className={styles.price}>
              <Icon name="token_filled" color="primary" fontSize={24} />
              <p>{price} ETH</p>
            </div>
            <div className={styles.button} onClick={() => setIsMint(true)}>Mint</div>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.banner}>
            <Image src={banner} alt={banner} layout="fill" className={styles.image} priority />
            <div className={styles.logo}>
              <Image src={logo} alt={logo} width={120} height={120} />
            </div>
            <div className={styles.control}>
              <div>
                <IconButton icon="fin-assets_filled" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="token_filled" colorIcon="default" sizeIcon={16} size={32} />
              </div>
              <div>
                <Button size="small" className={styles.btn} onClick={() => setIsReadMore(true)}>Read more</Button>
                <IconButton icon="discord_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="facebook_solid" colorIcon="default" sizeIcon={16} size={32} />
                <IconButton icon="twitter_solid" colorIcon="default" sizeIcon={16} size={32} />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.content}>
              <span className={styles.title}>{title}</span>
              <p className={styles.subtitle}>{subtitle}</p>
              <div className={styles.info}>
                <div>
                  <span>By</span>
                  <Link href="/">{creator}</Link>
                </div>
                <div>
                  <span>Smart-contract</span>
                  <Link href="/">{cutWallet(smart)}</Link>
                </div>
              </div>
              <div className={styles.props}>
                {Object.keys(props).map(key => (
                  <div key={key} className={`${styles['props__item']} ${styles[`props__item_${key}`]}`}>
                    <span>{key}</span>
                    <p>{props[key as keys]} {(key == 'floor' || key == 'volume') && 'ETH'}</p>
                  </div>
                ))}
              </div>
              <p className={styles.text}>{text}</p>
              <p className={styles['text-btn']} onClick={() => setIsReadMore(true)}>Read more</p>
              <Button type="primary" onClick={() => setIsReadMore(true)}>About collection</Button>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.tabs}>
            <RadioButton
              buttons={
                [
                  {text: 'Items', value: 'items'},
                  {text: 'Activity', value: 'activity'},
                  {text: 'Analytics', value: 'analytics'},
                  {text: 'Holders', value: 'holders'},
                  {text: 'Governance', value: 'governance'}
                ]
              }
              onChange={(e) => setTab(e.target.value)}
              defaultValue="items"
            />
          </div>
          <div className={styles.content}>
            {tab === 'items' && (
              <div className={styles['items']}>
                {items.map((i, index) => (
                  <NftCard key={index} {...i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {isReadMore && (
        <Modal
          width={1000}
          footer={false}
          open={isReadMore}
          onCancel={() => setIsReadMore(false)}
        >
          <div className={styles['modal-read-more']}>
            <div className="modal-wrap">
              <p className={styles.title}>{title}</p>
              <p className={styles.subtitle}>{subtitle}</p>
              <div className={styles.block}>
                <p className={styles.heading}>Description</p>
                <p className={styles.text}>{description}</p>
              </div>
              <div className={styles.block}>
                <p className={styles.heading}>Opportunities</p>
                <div className={styles.props}>
                  {Object.keys(props).map(key => (
                    <div key={key} className={`${styles['props__item']} ${styles[`props__item_${key}`]}`}>
                      <span>{key}</span>
                      <p>{props[key as keys]} {(key == 'floor' || key == 'volume') && 'ETH'}</p>
                    </div>
                  ))}
                </div>
                <Button className={styles.button}>Manual</Button>
              </div>
              <div className={styles.block}>
                <p className={styles.heading}>About project</p>
                <p className={styles.text}>{aboutProject}</p>
                <div className={styles.social}>
                  <IconButton icon="discord_solid" colorIcon="default" sizeIcon={16} size={32} />
                  <IconButton icon="facebook_solid" colorIcon="default" sizeIcon={16} size={32} />
                  <IconButton icon="twitter_solid" colorIcon="default" sizeIcon={16} size={32} />
                </div>
              </div>
              <div className={styles.block}>
                <p className={styles.heading}>Our team</p>
                <div className={styles.team}>
                  {team.map(i => (
                    <div key={i.image} className={styles.item}>
                      <Image src={i.image} alt={i.image} width={150} height={150} />
                      <p className={styles.name}>{i.name}</p>
                      <p className={styles.position}>{i.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {isMint && (
        <Modal
          width={604}
          footer={false}
          open={isMint}
          onCancel={() => setIsMint(false)}
        >
          <div className={styles['modal-mint']}>
            <div className="modal-wrap">
              <p className={styles.title}>Minting collection</p>
              <p className={styles.subtitle}>{title} Collection</p>
              <Form
                form={form}
                className={styles.form}
                onFinish={() => {
                  setIsMint(false)
                  setIsCongratulation(true)
                  form.resetFields()
                }}
                onValuesChange={(_, value) => console.log('form: ',value)}
              >
                <div className={styles['item']}>
                  <Form.Item name="count">
                    <div>
                      <InputNumber
                        min={0}
                        size="large"
                        controls={false}
                        value={countMint}
                        placeholder="Amount NFTs"
                        className={styles['input-number']}
                        formatter={(value) => `${value}`.replace(/[^0-9]/g, '')}
                        prefix={<Icon name="collections_solid" fontSize={24} color={countMint ? 'primary' : 'grey'} className="mr-16" />}
                      />
                      <div className="after-input-number d-xs-none">
                        <div className="btn-plus">
                          <Button className="btn-plus__item" onClick={() => form.setFieldValue('count', (Number(countMint) || 0) + 1)}>+1</Button>
                          <Button className="btn-plus__item" onClick={() => form.setFieldValue('count', (Number(countMint) || 0) + 5)}>+5</Button>
                          <Button className="btn-plus__item" onClick={() => form.setFieldValue('count', (Number(countMint) || 0) + 10)}>+10</Button>
                        </div>
                      </div>
                    </div>
                  </Form.Item>
                </div>
                <div className={styles['item']}>
                  <Form.Item name="price">
                    <InputNumber
                      min={0}
                      size="large"
                      controls={false}
                      placeholder="0.1 ETH for 1 NFT"
                      className={styles['input-number']}
                      formatter={(value) => !!value ? `${value || 0} ETH` : ''}
                      // @ts-ignore
                      parser={(value) => !!value ? Number(value!.replace(' ETH', '')) : 0}
                      prefix={<>
                        <Icon name="token_filled" fontSize={24} color={priceMint ? 'primary' : 'grey'} className="mr-16" />
                        <div className="after-input-number d-xs-none">
                          <div className="expression">
                            <div className="expression__item">
                              <span className="expression__label">total</span>
                              <p className="expression__value">{(countMint || 0) * (priceMint || 0)}</p>
                            </div>
                            <div className="expression__item">
                              <span className="expression__label"/>
                              <p className="expression__value">=</p>
                            </div>
                            <div className="expression__item">
                              <span className="expression__label">price</span>
                              <span className="expression__value">{priceMint || 0}</span>
                            </div>
                            <div className="expression__item">
                              <span className="expression__label"/>
                              <Icon name="close" fontSize={7} color="default" className="expression__value" />
                            </div>
                            <div className="expression__item">
                              <span className="expression__label">count</span>
                              <p className="expression__value">{countMint || 0}</p>
                            </div>
                          </div>
                        </div>
                      </>}
                    />
                  </Form.Item>
                </div>
                <div className={styles['item']}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!countMint || !priceMint || countMint <= 0 || priceMint <= 0}
                  >
                    MINT!!!
                  </Button>
                </div>
              </Form>
              <div className={styles.examples}>
                <p>Examples</p>
                <div>
                  <Image src="/assets/nft/6964-2.jpg" alt="example" width={124} height={124} />
                  <Image src="/assets/nft/911.jpg" alt="example" width={124} height={124} />
                  <Image src="/assets/nft/6964-2.jpg" alt="example" width={124} height={124} />
                  <Image src="/assets/nft/911.jpg" alt="example" width={124} height={124} />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <MintModal
        open={isCongratulation}
        onCancel={() => setIsCongratulation(false)}
        label="Your NFT is minted"
        heading="Congratulations"
        name={congratulation.name}
        image={congratulation.image}
        nested={congratulation.nested}
        property={congratulation.props}
        referral={congratulation.referral}
      />
    </div>
  );
};

export default CollectionPage