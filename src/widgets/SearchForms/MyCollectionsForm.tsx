import { FC, useState } from 'react'
import styleForm from './Form.module.scss'
import { Form } from 'antd'
import IconButton from '@/components/IconButton'
import Icon from '@/components/Icon'
import Select from '@/components/Select'
import { optionsCryptoWallet } from '../../../store'
import RadioButton from '@/components/RadioButton'
import Input from '@/components/Input'

interface IMyCollectionsForm {

}

const MyCollectionsForm: FC<IMyCollectionsForm> = () => {
  const [form] = Form.useForm()
  const [openFilter, setOpenFilter] = useState(false)

  const tabsButtons = [
    {text: 'All', value: 'all'},
    {text: 'Owned', value: 'owned'},
    {text: 'I created', value: 'i-created'},
    {text: 'Minted', value: 'minted'},
    {text: 'Items', value: 'items'},
    {text: 'Favourites', value: 'favourites'},
    {text: 'Offer', value: 'offer'},
    {text: 'Loans', value: 'loans'},
    {text: 'Trade', value: 'trade'}
  ]

  return (
    <div className={styleForm.root}>
      <Form
        form={form}
        initialValues={{
          wallet: 'eth',
          tab: 'all',
        }}
        className={`${styleForm.form} ${styleForm['form-my-collection']}`}
      >
        <div className={styleForm.wrap}>
          <Form.Item name="wallet">
            <Select options={optionsCryptoWallet} withPrefix />
          </Form.Item>
          <Form.Item name="tab" className={styleForm['tabs-wrap']}>
            <RadioButton
              buttons={tabsButtons}
              className={styleForm.tabs}
              defaultValue="followers"
            />
          </Form.Item>
          <Form.Item name="search" className={styleForm.search}>
            <Input placeholder="Search" prefix={<Icon name="search_outlined" className={styleForm['prefix-icon']} fontSize={16} color="grey" />} className={styleForm.input} />
          </Form.Item>
          <div className={styleForm.flex}>
            <div
              onClick={() => setOpenFilter(!openFilter)}
              className={`${styleForm.button} ${openFilter && styleForm.active}`}
            >
              <span>Filters</span>
              <Icon name="filters_outlined" color="primary" />
            </div>
            <IconButton icon="refresh_outlined" sizeIcon={16} onClick={() => form.resetFields()} />
          </div>
        </div>
        <Form.Item name="tab" className={styleForm['tabs-wrap']}>
          <RadioButton
            buttons={tabsButtons}
            className={styleForm.tabs}
            defaultValue="followers"
          />
        </Form.Item>
        <div className={`${styleForm['filter-wrapper']} ${openFilter && styleForm.visible}`}>
          <div className={styleForm['filter-wrapper__form']}>
            <div className={styleForm['filter-wrapper__form-item']}>
              <p className={styleForm.label}>Type</p>
              <Form.Item name="tab">
                <RadioButton buttons={tabsButtons} type="tag" className={styleForm.tag} />
              </Form.Item>
            </div>
          </div>
          <IconButton
            sizeIcon={24}
            colorIcon="default"
            className={styleForm.rotate180}
            icon="chevron-up-down_outlined"
            onClick={() => setOpenFilter(false)}
          />
        </div>
      </Form>
      <div className={`${styleForm.mask} ${openFilter && styleForm.visible}`} onClick={() => setOpenFilter(false)} />
    </div>
  );
};

export default MyCollectionsForm