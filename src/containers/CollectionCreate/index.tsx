import React, { useEffect, useState } from 'react'
import styles from './CollectionCreate.module.scss'
import RadioButton from '@/components/RadioButton'
import Button from '@/components/Button'
import { Form, Radio as RadioAntd, Input as InputAntd, RadioChangeEvent } from 'antd'
import { collectionPage, cryptoWallet, nftFunction, propsType } from '../../../store'
import CheckCard from '@/components/CheckCard'
import styled from '@emotion/styled'
import Image from 'next/image'
import Icon from '@/components/Icon'
import AlertModal from '@/widgets/Models/AlertModal'
import Input from '@/components/Input'
import IconButton from '@/components/IconButton'
import { cutWallet, getBase64 } from '@/utils'
import { RcFile } from 'antd/es/upload/interface'
import Link from 'next/link'
import dynamic from "next/dynamic"

const UploadImage = dynamic(() => import('@/components/UploadImage'), { ssr: false })

const { TextArea } = InputAntd

const CollectionCreate = () => {
  const [typeForm] = Form.useForm()
  const [blockchainForm] = Form.useForm()
  const [descriptionForm] = Form.useForm()
  const typeValue = Form.useWatch('type', typeForm)
  const logoValue = Form.useWatch('logo', descriptionForm)
  const nameValue = Form.useWatch('name', descriptionForm)
  const shortDescValue = Form.useWatch('shortDesc', descriptionForm)
  const descValue = Form.useWatch('desc', descriptionForm)
  const imageValue = Form.useWatch('image', descriptionForm)
  const shortNameValue = Form.useWatch('shortName', descriptionForm)
  const blockchainValue = Form.useWatch('blockchain', blockchainForm)
  const functionalValue = Form.useWatch('functional', descriptionForm)
  const [step, setStep] = useState<'blockchain' | 'type' | 'description' | 'preview'>('blockchain')
  const [alertModal, setAlertModal] = useState(false)
  const [bannerUrl, setBannerUrl] = useState('')
  const [logoUrl, setLogoUrl] = useState('')

  useEffect(() => {
    imageValue && getBase64(imageValue.file.originFileObj as RcFile, (url) => {
      setBannerUrl(url)
    })
    logoValue && getBase64(logoValue.file.originFileObj as RcFile, (url) => {
      setLogoUrl(url)
    })
  }, [imageValue, logoValue])

  type keys = keyof propsType

  const tabs = [
    {text: 'Blockchain', value: 'blockchain'},
    {text: 'Type of collectible items', value: 'type'},
    {text: 'Description', value: 'description'}
  ]

  return (
    <div className={styles.root}>
      <div className="container-edit-page">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className="title">Creating collection</h1>
            <div className={styles.tabs}>
              <RadioButton
                buttons={
                  (typeValue && logoValue && nameValue && shortDescValue && descValue && imageValue && shortNameValue && blockchainValue && functionalValue)
                    ? [...tabs, {text: 'Preview', value: 'preview'}] : tabs
                }
                value={step}
                onChange={(e: RadioChangeEvent) => setStep(e.target.value)}
              />
            </div>
          </div>
          <Form.Provider
            onFormFinish={(name, { values, forms }) => {
              if (name === 'blockchainForm') {
                setStep('type')
              }
              if (name === 'typeForm') {
                setStep('description')
              }
              if (name === 'descriptionForm') {
                setStep('preview')
                const { blockchainForm, typeForm } = forms;
                console.log('values ', {...values, ...blockchainForm.getFieldsValue(), ...typeForm.getFieldsValue()})
              }
            }}
          >
            <div className={styles.form}>
              <Form form={blockchainForm} name="blockchainForm" initialValues={{ blockchain: 'eth' }} className={`${styles['form__item']} ${step !== 'blockchain' && styles.hide}`}>
                <p className="subtitle">Blockchain network</p>
                <Form.Item name="blockchain" noStyle>
                  <RadioGroup className={`${styles['radio-wrap']} ${styles['radio-wrap_blockchain']}`}>
                    {cryptoWallet.map(i => (
                      <Radio key={i.value} value={i.value}>
                        <CheckCard checked={blockchainValue == i.value}>
                          <div className={`${styles['radio-wrap__item']} ${blockchainValue == i.value && styles['radio-wrap__item_active']}`}>
                            <Image src={i.image} alt={i.image} width={56} height={56} />
                            <span>{i.label}</span>
                          </div>
                        </CheckCard>
                      </Radio>
                    ))}
                  </RadioGroup>
                </Form.Item>
                <Button type="primary" size="small" htmlType="submit">Next</Button>
              </Form>
              <Form form={typeForm} name="typeForm" initialValues={{ type: 'simple' }} className={`${styles['form__item']} ${step !== 'type' && styles.hide}`}>
                <p className="subtitle">Type of items</p>
                <Form.Item name="type" noStyle>
                  <RadioGroup className={`${styles['radio-wrap']} ${styles['radio-wrap_type']}`}>
                    <Radio value="simple">
                      <CheckCard checked={typeValue == "simple"}>
                        <div className={`${styles['radio-wrap__item']} ${typeValue == "simple" && styles['radio-wrap__item_active']}`}>
                          <Icon name="file_filled" fontSize={100} color="grey" />
                          <span>Simple</span>
                          <p>If you want to highlight the uniqueness and individuality of your item</p>
                        </div>
                      </CheckCard>
                    </Radio>
                    <Radio value="multiple">
                      <CheckCard checked={typeValue == "multiple"}>
                        <div className={`${styles['radio-wrap__item']} ${typeValue == "multiple" && styles['radio-wrap__item_active']}`}>
                          <div className={styles['radio-wrap__wrap-icon']}>
                            <Icon name="file_filled" fontSize={25} color="grey" />
                            <Icon name="file_filled" fontSize={50} color="grey" />
                            <Icon name="file_filled" fontSize={100} color="grey" />
                            <Icon name="file_filled" fontSize={50} color="grey" />
                            <Icon name="file_filled" fontSize={25} color="grey" />
                          </div>
                          <span>Multiple</span>
                          <p>If you want to share your NFT with a large number of community members</p>
                        </div>
                      </CheckCard>
                    </Radio>
                  </RadioGroup>
                </Form.Item>
                <Button type="primary" size="small" htmlType="submit">Next</Button>
              </Form>
              <Form form={descriptionForm} name="descriptionForm" className={`${styles['form__item']} ${step !== 'description' && styles.hide}`}>
                <p className="subtitle">Description</p>
                <div className={styles['form-description']}>
                  <Form.Item name="image" valuePropName="valueImage" rules={[{ required: true, message: 'Image is required' }]}>
                    <UploadImage className={styles['upload-image']} size="large" maxSizeImage={20} resolution={{width: 1920, height: 400}} />
                  </Form.Item>
                  <div className={styles['upload-input-grid']}>
                    <Form.Item name="logo" valuePropName="valueImage" className={styles.flex} rules={[{ required: true, message: 'Logo is required' }]}>
                      <UploadImage className={styles['upload-image']} maxSizeImage={10} resolution={{width: 300, height: 300}} />
                    </Form.Item>
                    <div className={styles['inputs']}>
                      <div className={styles['inputs__flex']}>
                        <div className={styles['inputs__item']}>
                          <label htmlFor="name">Enter collection name</label>
                          <Form.Item name="name" rules={[{ required: true, message: 'Name is required' }]}>
                            <Input
                              placeholder="Cooool name"
                              prefix={<Icon name="txt_filled" fontSize={24} color="grey" className="mr-13" />}
                            />
                          </Form.Item>
                        </div>
                        <div className={styles['inputs__item']}>
                          <label htmlFor="shortName">Short name</label>
                          <Form.Item name="shortName" rules={[{ required: true, message: 'Short name is required' }]}>
                            <Input
                              placeholder="CLN"
                              prefix={<Icon name="txt_filled" fontSize={24} color="grey" className="mr-13" />}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className={styles['inputs__item']}>
                        <label htmlFor="shortDesc">Short description</label>
                        <div className={styles['prefix-wrap']}>
                          <Icon name="txt_filled" fontSize={24} color="grey" className={styles['prefix-wrap__prefix']} />
                          <Form.Item name="shortDesc" rules={[{ required: true, message: 'Short description is required' }]}>
                            <TextArea
                              placeholder="My super collection"
                              autoSize={{ minRows: 4, maxRows: 4 }}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className={styles['inputs__item']}>
                        <label htmlFor="desc">Full description</label>
                        <div className={styles['prefix-wrap']}>
                          <Icon name="txt_filled" fontSize={24} color="grey" className={styles['prefix-wrap__prefix']} />
                          <Form.Item name="desc" rules={[{ required: true, message: 'Full description is required' }]}>
                            <TextArea
                              rows={7}
                              placeholder="My super puper collection"
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles['form-description__functional']}>
                    <p className="subtitle">NFT functional</p>
                    <Form.Item name="functional" className={styles.flex} rules={[{ required: true, message: 'NFT functional is required' }]}>
                      <RadioGroup className={styles['functional-wrap']}>
                        {nftFunction.map(i => (
                          <Radio key={i.value} value={i.value}>
                            <CheckCard checked={functionalValue == i.value} icon={false}>
                              <div className={`${styles['functional-wrap__item']} ${functionalValue == i.value && styles['functional-wrap__item_active']}`}>
                                <Icon name={i.icon} fontSize={48} color="grey" />
                                <p>{i.label}</p>
                              </div>
                            </CheckCard>
                          </Radio>
                        ))}
                      </RadioGroup>
                    </Form.Item>
                  </div>
                </div>
                <Button type="primary" size="small" htmlType="submit">View preview</Button>
              </Form>
              <div className={`${styles['form__item']} ${step !== 'preview' && styles.hide}`}>
                <p className="subtitle">Appearance</p>
                <div className={styles.preview}>
                  <div className={styles.header}>
                    <div className={styles.banner}>
                      {bannerUrl && (<Image src={bannerUrl} alt="banner" layout="fill" className={styles.image} priority />)}
                      <div className={styles.logo}>
                        {logoUrl && (<Image src={logoUrl} alt="logo" width={80} height={80} />)}
                      </div>
                      <div className={styles.control}>
                        <div>
                          <IconButton icon="fin-assets_filled" colorIcon="default" sizeIcon={12} size={20} />
                          <IconButton icon="token_filled" colorIcon="default" sizeIcon={12} size={20} />
                        </div>
                        <div>
                          <Button size="small" className={styles.btn}>Read more</Button>
                          <IconButton icon="discord_solid" colorIcon="default" sizeIcon={12} size={20} />
                          <IconButton icon="facebook_solid" colorIcon="default" sizeIcon={12} size={20} />
                          <IconButton icon="twitter_solid" colorIcon="default" sizeIcon={12} size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.title}>{nameValue}</span>
                    <p className={styles.subtitle}>{shortNameValue}</p>
                    <div className={styles.info}>
                      <div>
                        <span>By</span>
                        <Link href="/">Dj.Snash</Link>
                      </div>
                      <div>
                        <span>Smart-contract</span>
                        <Link href="/">{cutWallet('0x0755gg553412341388ij')}</Link>
                      </div>
                    </div>
                    <div className={styles.props}>
                      {Object.keys(collectionPage.props).map(key => (
                        <div key={key} className={`${styles['props__item']} ${styles[`props__item_${key}`]}`}>
                          <span>{key}</span>
                          <p>{collectionPage.props[key as keys]} {(key == 'floor' || key == 'volume') && 'ETH'}</p>
                        </div>
                      ))}
                    </div>
                    <p className={styles.text}>{descValue}</p>
                    <p className={styles['text-btn']}>Read more</p>
                    <Button type="primary" className={styles.btn}>About collection</Button>
                  </div>
                  <div className={styles.content}>
                    <div className={styles['tabs-skeleton']}>
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                      <div className={styles['tabs-skeleton__tab']} />
                    </div>
                    <div className={styles['cards-wrap']}>
                      <div className={styles['cards-wrap__item']}>
                        <div className={styles.img} />
                        <div className={styles['skeleton']} />
                      </div>
                      <div className={styles['cards-wrap__item']}>
                        <div className={styles.img} />
                        <div className={styles['skeleton']} />
                      </div>
                      <div className={styles['cards-wrap__item']}>
                        <div className={styles.img} />
                        <div className={styles['skeleton']} />
                      </div>
                      <div className={styles['cards-wrap__item']}>
                        <div className={styles.img} />
                        <div className={styles['skeleton']} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['wrap-submit']}>
                  <p>Do you like it?</p>
                  <div className={styles['wrap-submit__button']}>
                    <p>Cost: <span>1000FD</span></p>
                    <Button type="primary" htmlType="submit" onClick={() => setAlertModal(true)}>Create collection</Button>
                  </div>
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
        title="Create collection"
        text="Your collection has been created."
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

export default CollectionCreate