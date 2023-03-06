import React, { useState } from 'react'
import styles from './CollectionCreate.module.scss'
import RadioButton from '@/components/RadioButton'
import Button from '@/components/Button'
import { Form, Radio as RadioAntd, Input as InputAntd } from 'antd'
import { cryptoWallet, nftFunction } from '../../../store'
import CheckCard from '@/components/CheckCard'
import styled from '@emotion/styled'
import Image from 'next/image'
import Icon from '@/components/Icon'
import AlertModal from '@/widgets/Models/AlertModal'
import UploadImage from '@/components/UploadImage'
import Input from '@/components/Input'

const { TextArea } = InputAntd

const CollectionCreate = () => {
  const [form] = Form.useForm()
  const typeValue = Form.useWatch('type', form)
  const blockchainValue = Form.useWatch('blockchain', form)
  const functionalValue = Form.useWatch('functional', form)
  const [step, setStep] = useState<'blockchain' | 'type' | 'description' | 'preview'>('blockchain')
  const [alertModal, setAlertModal] = useState(false)

  return (
    <div className={styles.root}>
      <div className="container-edit-page">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1 className="title">Creating collection</h1>
            <div className={styles.tabs}>
              <RadioButton
                buttons={
                  [
                    {text: 'Blockchain', value: 'blockchain'},
                    {text: 'Type of collectible items', value: 'type'},
                    {text: 'Description', value: 'description'}
                  ]
                }
                value={step == 'preview' ? 'description' : step}
              />
            </div>
          </div>
          <Form
            form={form}
            initialValues={{
              blockchain: 'eth',
              type: 'simple'
            }}
            className={styles.form}
            onFinish={v => console.log('value ',v)}
            onValuesChange={(_, value) => console.log('form: ',value)}
          >
            <div className={`${styles['form__item']} ${step !== 'blockchain' && styles.hide}`}>
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
              <Button type="primary" size="small" onClick={() => setStep('type')}>Next</Button>
            </div>
            <div className={`${styles['form__item']} ${step !== 'type' && styles.hide}`}>
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
              <Button type="primary" size="small" onClick={() => setStep('description')}>Next</Button>
            </div>
            <div className={`${styles['form__item']} ${step !== 'description' && styles.hide}`}>
              <p className="subtitle">Description</p>
              <div className={styles['form-description']}>
                <Form.Item name="image" valuePropName="valueImage">
                  <UploadImage className={styles['upload-image']} size="large" maxSizeImage={20} resolution={{width: 1920, height: 400}} />
                </Form.Item>
                <div className={styles['upload-input-grid']}>
                  <Form.Item name="avatar" valuePropName="valueImage" noStyle>
                    <UploadImage className={styles['upload-image']} maxSizeImage={10} resolution={{width: 300, height: 300}} />
                  </Form.Item>
                  <div className={styles['inputs']}>
                    <div className={styles['inputs__flex']}>
                      <div className={styles['inputs__item']}>
                        <label htmlFor="name">Enter collection name</label>
                        <Form.Item name="name">
                          <Input
                            placeholder="Cooool name"
                            prefix={<Icon name="txt_filled" fontSize={24} color="grey" className="mr-13" />}
                          />
                        </Form.Item>
                      </div>
                      <div className={styles['inputs__item']}>
                        <label htmlFor="short-name">Short name</label>
                        <Form.Item name="short-name">
                          <Input
                            placeholder="CLN"
                            prefix={<Icon name="txt_filled" fontSize={24} color="grey" className="mr-13" />}
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className={styles['inputs__item']}>
                      <label htmlFor="short-desc">Short description</label>
                      <div className={styles['prefix-wrap']}>
                        <Icon name="txt_filled" fontSize={24} color="grey" className={styles['prefix-wrap__prefix']} />
                        <Form.Item name="short-desc">
                          <TextArea
                            placeholder="My super collection"
                            autoSize={{ minRows: 4, maxRows: 4 }}
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className={styles['inputs__item']}>
                      <label htmlFor="short-desc">Full description</label>
                      <div className={styles['prefix-wrap']}>
                        <Icon name="txt_filled" fontSize={24} color="grey" className={styles['prefix-wrap__prefix']} />
                        <Form.Item name="desc">
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
                  <Form.Item name="functional" noStyle>
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
              <Button type="primary" size="small" onClick={() => setStep('preview')}>View preview</Button>
            </div>
          </Form>
        </div>
      </div>
      <AlertModal
        width={630}
        open={alertModal}
        subtitle="Success"
        title="Create collection"
        text="Your collection has been created."
        onCancel={() => setAlertModal(false)}
        button={{onClick: () => setAlertModal(false)}}
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