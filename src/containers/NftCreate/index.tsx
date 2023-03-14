import React, { useEffect, useState } from 'react'
import styles from './NftCreate.module.scss'
import RadioButton from '@/components/RadioButton'
import Button from '@/components/Button'
import { Form, Radio as RadioAntd, Input as InputAntd, RadioChangeEvent, InputNumber } from 'antd'
import CheckCard from '@/components/CheckCard'
import styled from '@emotion/styled'
import Image from 'next/image'
import Icon from '@/components/Icon'
import AlertModal from '@/widgets/Modals/AlertModal'
import Input from '@/components/Input'
import IconButton from '@/components/IconButton'
import Select from '@/components/Select/base'
import { cutWallet, getBase64 } from '@/utils'
import { RcFile } from 'antd/es/upload/interface'
import dynamic from "next/dynamic"
import { IconNamesMap } from '@/components/Icon/types'
import Switch from '@/components/Switch'
import NftNested from '@/components/NftNested'
import { nftPage } from '../../../store'

const UploadImage = dynamic(() => import('@/components/UploadImage'), { ssr: false })

const { TextArea } = InputAntd

const NftCreate = () => {
  const [ercForm] = Form.useForm()
  const [saleForm] = Form.useForm()
  const [descriptionForm] = Form.useForm()

  const ercValue = Form.useWatch('type', ercForm)
  const priceValue = Form.useWatch('price', saleForm) || 0
  const nameValue = Form.useWatch('name', descriptionForm)
  const descValue = Form.useWatch('desc', descriptionForm)
  const imageValue = Form.useWatch('image', descriptionForm)
  const royaltiesValue = Form.useWatch('royalties', saleForm)
  const saleMethodValue = Form.useWatch('saleMethod', saleForm)
  const minimumBidValue = Form.useWatch('minimumBid', saleForm)
  const shortDescValue = Form.useWatch('shortDesc', descriptionForm)
  const propertiesValue = Form.useWatch('properties', descriptionForm)

  const [imageUrl, setImageUrl] = useState('')
  const [alertModal, setAlertModal] = useState(false)
  const [step, setStep] = useState<'erc' | 'description' | 'sale' | 'preview'>('erc')

  useEffect(() => {
    imageValue && getBase64(imageValue.file.originFileObj as RcFile, (url) => {
      setImageUrl(url)
    })
  }, [imageValue])

  const tabs = [
    {text: 'ERC', value: 'erc'},
    {text: 'Description', value: 'description'},
    {text: 'Sale props', value: 'sale'}
  ]

  const { collection, owner, price } = nftPage

  const wallet = {
    img: '/metamask.svg',
    name: 'Ethereum',
    wallet: '0x6dkfed9339dd0hh',
    eth: 134.1,
    wEth: 1233.5
  }

  const saleMethod = [
    {
      label: 'Fixed \nprice',
      value: 'fixed-price',
      icon: 'fixed-price_filled' as IconNamesMap
    },
    {
      label: 'Open \nfor bids',
      value: 'open-bids',
      icon: 'bibs_filled' as IconNamesMap
    },
    {
      label: 'Time \nauction',
      value: 'time-auction',
      icon: 'clock_filled' as IconNamesMap
    }
  ]

  const feePercent = 1

  const checkPrice = (_: any, value: number) => {
    if (value > 0) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('Price must be greater than zero!'))
  }

  const checkBid = (_: any, value: number) => {
    if (value > 0) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('Minimum bid must be greater than zero!'))
  }

  const checkRoyalties = (_: any, value: number) => {
    if (value > 50) {
      return Promise.reject(new Error('Maximum is 50%'))
    }

    return Promise.resolve()
  }

  return (
    <div className={styles.root}>
      <div className="container-edit-page">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className="title">Creating NFTs</h1>
            <div className={styles.tabs}>
              <RadioButton
                buttons={
                  (ercValue && nameValue && shortDescValue && descValue && imageValue && saleMethodValue && priceValue && minimumBidValue && royaltiesValue !== undefined)
                    ? [...tabs, {text: 'Preview', value: 'preview'}] : tabs
                }
                value={step}
                onChange={(e: RadioChangeEvent) => setStep(e.target.value)}
              />
            </div>
          </div>
          <Form.Provider
            onFormFinish={(name, { values, forms }) => {
              if (name === 'ercForm') {
                setStep('description')
              }
              if (name === 'descriptionForm') {
                setStep('sale')
              }
              if (name === 'saleForm') {
                setStep('preview')
                const { ercForm, descriptionForm } = forms;
                console.log('values ', {...values, ...ercForm.getFieldsValue(), ...descriptionForm.getFieldsValue()})
              }
            }}
            onFormChange={(name, info) => {
              const changedFields = info.changedFields[0]
              if ((name == 'descriptionForm' || name == 'saleForm') && changedFields.name == 'image') {
                info.forms.descriptionForm.setFieldValue('image', changedFields.value)
                info.forms.saleForm.setFieldValue('image', changedFields.value)
              }
            }}
          >
            <div className={styles.form}>
              <Form form={ercForm} name="ercForm" initialValues={{ type: '721' }} className={`${styles['form__item']} ${step !== 'erc' && styles.hide}`}>
                <p className="subtitle">ERC standart</p>
                <Form.Item name="type" noStyle>
                  <RadioGroup className={styles['radio-wrap']}>
                    <Radio value="721">
                      <CheckCard checked={ercValue == "721"}>
                        <div className={`${styles['radio-wrap__item']} ${ercValue == "721" && styles['radio-wrap__item_active']}`}>
                          <Icon name="image_solid" fontSize={56} color="grey" />
                          <span>ERC-721</span>
                        </div>
                      </CheckCard>
                    </Radio>
                    <Radio value="1155">
                      <CheckCard checked={ercValue == "1155"}>
                        <div className={`${styles['radio-wrap__item']} ${ercValue == "1155" && styles['radio-wrap__item_active']}`}>
                          <div className={styles['radio-wrap__wrap-icon']}>
                            <Icon name="image_solid" fontSize={24} color="grey" />
                            <Icon name="image_solid" fontSize={36} color="grey" />
                            <Icon name="image_solid" fontSize={56} color="grey" />
                            <Icon name="image_solid" fontSize={36} color="grey" />
                            <Icon name="image_solid" fontSize={24} color="grey" />
                          </div>
                          <span>ERC-1155</span>
                        </div>
                      </CheckCard>
                    </Radio>
                  </RadioGroup>
                </Form.Item>
                <Button type="primary" size="small" htmlType="submit">Next</Button>
              </Form>
              <Form
                form={descriptionForm}
                name="descriptionForm"
                className={`${styles['form__item']} ${step !== 'description' && styles.hide}`}
              >
                <p className="subtitle">Description</p>
                <div className={styles['form-description']}>
                  <div className={styles['left-side']}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="name">Enter NFT name</label>
                      <Form.Item name="name" rules={[{ required: true, message: 'Name is required' }]}>
                        <Input
                          placeholder="Cooool name"
                          prefix={<Icon name="txt_filled" fontSize={24} color={nameValue ? 'primary' : 'grey'} className="mr-13" />}
                        />
                      </Form.Item>
                    </div>
                    <div className={styles['collection-wrap']}>
                      <div className={styles.collection}>
                        <Image src={collection.image} alt={collection.image} width={24} height={24} />
                        <span>{collection.name}</span>
                      </div>
                      <div className={styles.icon}>
                        <IconButton icon="fin-assets_filled" sizeIcon={12} colorIcon="default" size={16} className={styles.icon} />
                        <IconButton icon="token_filled" sizeIcon={12} colorIcon="default" size={16} className={styles.icon} />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="shortDesc">Short description</label>
                      <div className={styles['prefix-wrap']}>
                        <Icon name="txt_filled" fontSize={24} color={shortDescValue ? 'primary' : 'grey'} className={styles['prefix-wrap__prefix']} />
                        <Form.Item name="shortDesc" rules={[{ required: true, message: 'Short description is required' }]}>
                          <TextArea
                            placeholder="My super NFT"
                            autoSize={{ minRows: 3, maxRows: 3 }}
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="desc">Full description</label>
                      <div className={styles['prefix-wrap']}>
                        <Icon name="txt_filled" fontSize={24} color={descValue ? 'primary' : 'grey'} className={styles['prefix-wrap__prefix']} />
                        <Form.Item name="desc" rules={[{ required: true, message: 'Full description is required' }]}>
                          <TextArea
                            rows={4}
                            placeholder="My super puper NFt"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.properties}>
                      <Button
                        className={`${styles.toggle} ${propertiesValue?.length > 0 && styles.hide}`}
                        onClick={() => descriptionForm.setFieldValue('properties', [{}, {}, {}, {}])}
                      >
                        Add unique properties
                      </Button>
                      <div className={`${(!propertiesValue || propertiesValue?.length <= 0) && styles.hide}`}>
                        <label className={styles.label} htmlFor="properties">Properties</label>
                        <div className={styles['properties__list']}>
                          <Form.List name="properties">
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map((field, index) => (
                                  <Form.Item key={field.key}>
                                    <div className={styles['properties__item']}>
                                      <Form.Item
                                        {...field}
                                        valuePropName="valueImage"
                                        key={`${field.key}-image`}
                                        name={[field.name, 'image']}
                                        rules={[{ required: true, message: 'image is required' }]}
                                        noStyle
                                      >
                                        <UploadImage className={styles['upload-image']} typeButton="icon-button" />
                                      </Form.Item>
                                      <Form.Item
                                        {...field}
                                        key={`${field.key}-title`}
                                        name={[field.name, 'title']}
                                        rules={[{ required: true, message: 'title is required' }]}
                                        noStyle
                                      >
                                        <Input
                                          size="small"
                                          placeholder="Title"
                                          prefix={<Icon name="txt_filled" fontSize={16} color={propertiesValue[index].title ? 'primary' : 'grey'} className="mr-8" />}
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        {...field}
                                        key={`${field.key}-size`}
                                        name={[field.name, 'size']}
                                        rules={[{ required: true, message: 'size is required' }]}
                                        noStyle
                                      >
                                        <InputNumber
                                          min={0}
                                          size="small"
                                          placeholder="15"
                                          className={styles['input-number']}
                                          prefix={<Icon name="txt_filled" fontSize={16} color={propertiesValue[index].size ? 'primary' : 'grey'} className="mr-8" />}
                                        />
                                      </Form.Item>
                                      <IconButton icon="delete_filled" colorIcon="red" sizeIcon={18} size={40} onClick={() => remove(field.name)} />
                                    </div>
                                  </Form.Item>
                                ))}
                                <Form.Item>
                                  <Button size="small" className={styles.add} onClick={() => add()}>Add value</Button>
                                </Form.Item>
                              </>
                            )}
                          </Form.List>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles['right-side']}>
                    <Form.Item name="image" valuePropName="valueImage">
                      <UploadImage className={styles['upload-image']} maxSizeImage={100} resolution={{width: 1920, height: 1920}} />
                    </Form.Item>
                  </div>
                </div>
                <Button type="primary" size="small" htmlType="submit">Next</Button>
              </Form>
              <Form
                form={saleForm}
                name="saleForm"
                initialValues={{ saleMethod: 'fixed-price', date: '3', startingDate: 'right-after-listing', freeMinting: false }}
                className={`${styles['form__item']} ${step !== 'sale' && styles.hide}`}
              >
                <p className="subtitle">Sale props</p>
                <div className={styles['sale-props']}>
                  <div className={styles['left-side']}>
                    <div className={styles.field}>
                      <label className={styles.label}>Wallet</label>
                      <div className={styles.wallet}>
                        <div className={styles['wallet__header']}>
                          <div>
                            <Image src={wallet.img} alt={wallet.img} width={32} height={32} />
                            <div className={styles.info}>
                              <p className={styles['info__name']}>{wallet.name}</p>
                              <p className={styles['info__wallet']}>{cutWallet(wallet.wallet, 4)}</p>
                            </div>
                          </div>
                          <Icon name="copy_filled" color="primary" fontSize={18} />
                        </div>
                        <div className={styles['wallet__item']}>
                          <Icon name="token_filled" fontSize={18} />
                          <span>{wallet.eth} ETH</span>
                        </div>
                        <div className={styles['wallet__item']}>
                          <Icon name="token_filled" color="pink" fontSize={18} />
                          <span>{wallet.eth} ETH</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.field} ${styles['sale-method']}`}>
                      <label className={styles.label} htmlFor="saleMethod">Sale method</label>
                      <Form.Item name="saleMethod">
                        <RadioGroup className={styles['sale-method-wrap']}>
                          {saleMethod.map(i => (
                            <Radio key={i.value} value={i.value}>
                              <CheckCard checked={saleMethodValue == i.value} icon={false}>
                                <div className={`${styles['sale-method-wrap__item']} ${saleMethodValue == i.value && styles['sale-method-wrap__item_active']}`}>
                                  <Icon name={i.icon} fontSize={32} color="grey" />
                                  <p>{i.label}</p>
                                </div>
                              </CheckCard>
                            </Radio>
                          ))}
                        </RadioGroup>
                      </Form.Item>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="price">Price</label>
                      <div className={styles['expression']}>
                        <Form.Item name="price" rules={[{ validator: checkPrice }]}>
                          <InputNumber
                            controls={false}
                            placeholder="0 ETH"
                            className={styles['input-number']}
                            formatter={(value) => !!value ? `${value || 0} ETH` : ''}
                            parser={(value) => value!.replace(' ETH', '')}
                            prefix={<Icon name="token_filled" fontSize={24} color={priceValue ? 'primary' : 'grey'} className="mr-13" />}
                          />
                        </Form.Item>
                        <div className={styles['expression__after']}>
                          <div className={styles['expression__item']}>
                            <span className={styles.label}>U’ll receive</span>
                            <p className={styles.value}>{priceValue - priceValue * (feePercent * 0.01)}</p>
                          </div>
                          <div className={styles['expression__item']}>
                            <span className={styles.label}/>
                            <p className={styles.value}>=</p>
                          </div>
                          <div className={styles['expression__item']}>
                            <span className={styles.label}>price</span>
                            <span className={styles.value}>{priceValue}</span>
                          </div>
                          <div className={styles['expression__item']}>
                            <span className={styles.label}/>
                            <span className={styles.value}>-</span>
                          </div>
                          <div className={styles['expression__item']}>
                            <span className={styles.label}>fee</span>
                            <p className={styles.value}>{feePercent}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="date">Date of listing expiration</label>
                      <Form.Item name="date" noStyle>
                        <Select
                          size="large"
                          options={[
                            { value: '3', label: '3 mounths' },
                            { value: '6', label: '6 mounths' },
                            { value: '12', label: '12 mounths' },
                          ]}
                          prefix={<Icon name="calendar_filled" fontSize={24} color="primary" className="mr-13" />}
                        />
                      </Form.Item>
                      <p className={styles.footnote}>Expiration at 08.02.2023, 22:56</p>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="minimumBid">Minimum bid</label>
                      <Form.Item name="minimumBid" rules={[{ validator: checkBid }]}>
                        <InputNumber
                          controls={false}
                          placeholder="Minimum bid"
                          className={styles['input-number']}
                          prefix={<Icon name="token_filled" fontSize={24} color={minimumBidValue ? 'primary' : 'grey'} className="mr-13" />}
                        />
                      </Form.Item>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="startingDate">Starting Date</label>
                      <Form.Item name="startingDate" noStyle>
                        <Select
                          size="large"
                          options={[
                            { value: 'right-after-listing', label: 'Right after listing' },
                            { value: '3', label: 'In 3 days' },
                            { value: '7', label: 'In 7 days' },
                          ]}
                        />
                      </Form.Item>
                    </div>
                    <div className={styles.divider} />
                    <div className={`${styles.field} ${styles['switch-wrap']}`}>
                      <div>
                        <label className={styles.label} htmlFor="freeMinting">Free minting</label>
                        <p className={styles.footnote}>Bids below this amount won’t be allowed.</p>
                      </div>
                      <Form.Item name="freeMinting">
                        <Switch />
                      </Form.Item>
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="royalties">Royalties</label>
                      <Form.Item name="royalties" rules={[{ validator: checkRoyalties }]}>
                        <InputNumber
                          min={0}
                          max={50}
                          controls={false}
                          placeholder="10"
                          className={styles['input-number']}
                          prefix={<Icon name="Discount-Square_filled" fontSize={24} color={royaltiesValue ? 'primary' : 'grey'} className="mr-13" />}
                        />
                      </Form.Item>
                      <p className={styles.footnote}>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</p>
                    </div>
                  </div>
                  <div className={styles['right-side']}>
                    <Form.Item name="image" valuePropName="valueImage" rules={[{ required: true, message: 'image is required' }]}>
                      <UploadImage className={styles['upload-image']} maxSizeImage={100} resolution={{width: 1920, height: 1920}} />
                    </Form.Item>
                  </div>
                </div>
                <Button type="primary" size="small" htmlType="submit">View preview</Button>
              </Form>
              <div className={`${styles['form__item']} ${step !== 'preview' && styles.hide}`}>
                <p className="subtitle">Preview</p>
                <div className={styles.preview}>
                  <div className={styles['left-side']}>
                    <div className={styles.header}>
                      <div className={styles['left-side']}>
                        <p className={styles.title}>{nameValue} #488</p>
                        <div className={styles['collection-wrap']}>
                          <div className={styles.collection}>
                            <Image src={collection.image} alt={collection.image} width={18} height={18} />
                            <span>{collection.name}</span>
                          </div>
                          <div className={styles.icon}>
                            <IconButton icon="fin-assets_filled" sizeIcon={12} colorIcon="default" size={16} className={styles.icon} />
                            <IconButton icon="token_filled" sizeIcon={12} colorIcon="default" size={16} className={styles.icon} />
                          </div>
                        </div>
                        <div className={styles['user-wrap']}>
                          <Image src={owner.avatar} alt={owner.avatar} width={30} height={30} />
                          <div className={styles.text}>
                            <span>Owner</span>
                            <p>{cutWallet(owner.wallet)}</p>
                          </div>
                        </div>
                        <div className={styles['price-wrap']}>
                          <div className={styles.item}>
                            <span className={styles.label}>Price</span>
                            <p>{priceValue} ETH</p>
                            <span>${price.dollar.toLocaleString('en')}</span>
                          </div>
                          <div className={styles.item}>
                            <div>
                              <span className={styles.label}>Highest&nbsp;<span className={styles.black}>floor bid</span></span>
                              <p>{price.highestBid} wETH</p>
                              <span>by <span className={styles.link}>{cutWallet(price.highestBidBy)}</span></span>
                            </div>
                          </div>
                        </div>
                        <div className={styles['buttons-price-wrap']}>
                          <Button type="primary" size="small">ButNow for {priceValue} ETH</Button>
                          <IconButton icon="cart_filled" sizeIcon={16} size={32} />
                          <Button size="small">Place a bid</Button>
                        </div>
                      </div>
                      <div className={styles['right-side']}>
                        <NftNested image={imageUrl} nested={[]} panel={{like: 26}} classNamePanel={styles['nested-panel']} />
                      </div>
                    </div>
                    <div className={styles['tabs-skeleton']}>
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                    </div>
                    <div className={styles.block}>
                      <p className={styles.title}>Description</p>
                      <p className={styles.text}>{shortDescValue}</p>
                      <Button size="small">View all</Button>
                    </div>
                    <div className={styles.block}>
                      <p className={styles.title}>Latest bids</p>
                      <div className={styles['bids']}>
                        {[0,0,0,0,0,0].map((_, index) => (
                          <div key={`bids__item-${index}`} className={styles['bids__item']}>
                            <div className={styles.user}>
                              <div className={`${styles.skeleton} ${styles['skeleton-avatar']}`}/>
                              <div className={styles['user__text']}>
                                <div className={styles.skeleton}/>
                                <div className={styles.skeleton}/>
                              </div>
                            </div>
                            <div className={styles.skeleton}/>
                            <div>
                              <div className={styles.skeleton}/>
                              <div className={styles.skeleton}/>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button size="small">View all</Button>
                    </div>
                  </div>
                  <div className={styles['right-side']}>
                    <NftNested image={imageUrl} nested={[]} panel={{like: 26}} />
                  </div>
                </div>
                <div className={styles['wrap-submit']}>
                  <p>Do you like it?</p>
                  <Button type="primary" size="small" htmlType="submit" onClick={() => setAlertModal(true)}>Create NFT</Button>
                </div>
              </div>
            </div>
          </Form.Provider>
        </div>
      </div>
      <AlertModal
        width={630}
        open={alertModal}
        subtitle="Success"
        title="Create NFT item"
        text="Your NFT item(s) has been created."
        onCancel={() => setAlertModal(false)}
        button={true}
      />
    </div>
  );
};

const RadioGroup = styled(RadioAntd.Group)``
const Radio = styled(RadioAntd)`
  margin: 0;
  
  .ant-radio {
    display: none;
  }

  .ant-radio + span {
    width: 100%;
    padding: 0;
  }
`;

export default NftCreate