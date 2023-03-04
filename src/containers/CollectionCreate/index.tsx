import { useState } from 'react'
import styles from './CollectionCreate.module.scss'
import RadioButton from '@/components/RadioButton'
import Button from '@/components/Button'
import { Form, Radio as RadioAntd } from 'antd'
import { cryptoWallet } from '../../../store'
import CheckCard from '@/components/CheckCard'
import styled from '@emotion/styled'
import Image from 'next/image'
import Icon from '@/components/Icon'

const CollectionCreate = () => {
  const [form] = Form.useForm()
  const blockchainValue = Form.useWatch('blockchain', form)
  const typeValue = Form.useWatch('type', form)
  const [step, setStep] = useState<'blockchain' | 'type' | 'description' | 'preview'>('blockchain')

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
            className={styles.body}
            onValuesChange={(_, value) => console.log('form: ',value)}
          >
            {step == 'blockchain' && (
              <>
                <p className="subtitle">Blockchain network</p>
                <Form.Item name="blockchain" className={styles['form-item']}>
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
              </>
            )}
            {step == 'type' && (
              <>
                <p className="subtitle">Type of items</p>
                <Form.Item name="type" className={styles['form-item']}>
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
              </>
            )}
          </Form>
        </div>
      </div>
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