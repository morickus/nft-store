import { FC, useState } from 'react'
import styleForm from './Form.module.scss'
import { Form, InputNumber, Checkbox as CheckboxAntd } from 'antd'
import IconButton from '@/components/IconButton'
import Icon from '@/components/Icon'
import Select from '@/components/Select'
import { optionsCryptoWallet, optionsTrending } from '../../../store'
import RadioButton from '@/components/RadioButton'
import Checkbox from '@/components/Checkbox'
import Slider from '@/components/Slider'
import Input from '@/components/Input'

interface ICollectionsForm {

}

const CollectionsForm: FC<ICollectionsForm> = () => {
  const [form] = Form.useForm()
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <div className={styleForm.root}>
      <Form
        form={form}
        initialValues={{
          wallet: 'eth',
          options: ['lazy'],
          sortBy: 'trending',
          quantity: [10, 55]
        }}
        className={styleForm.form}
        onValuesChange={(_, value) => console.log('form: ',value)}
      >
        <Form.Item name="wallet">
          <Select options={optionsCryptoWallet} withPrefix />
        </Form.Item>
        <Form.Item name="search" className={styleForm.search}>
          <Input placeholder="Search" prefix={<Icon name="search_outlined" className={styleForm['prefix-icon']} fontSize={16} color="grey" />} className={styleForm.input} />
        </Form.Item>
        <Form.Item name="sortBy" className={styleForm.trending}>
          <Select options={optionsTrending} />
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
        <div className={`${styleForm['filter-wrapper']} ${openFilter && styleForm.visible}`}>
          <div className={styleForm['filter-wrapper__form']}>
            <div className={styleForm['filter-wrapper__form-item']}>
              <p className={styleForm.label}>Functional</p>
              <Form.Item name="functional">
                <RadioButton buttons={[
                  {text: 'Collect', value: 'collect'},
                  {text: 'Stack', value: 'stack'},
                  {text: 'Gaming', value: 'gaming'},
                  {text: 'Finance', value: 'finance'},
                  {text: 'Logistic', value: 'logistic'},
                ]} type="tag" />
              </Form.Item>
            </div>
            <div className={styleForm['filter-wrapper__form-item']}>
              <p className={styleForm.label}>Media</p>
              <Form.Item name="media">
                <RadioButton buttons={[
                  {text: 'Image', value: 'image'},
                  {text: 'GIF', value: 'gif'},
                  {text: 'Interactive', value: 'interactive'},
                  {text: '3D', value: '3d'},
                  {text: 'Video', value: 'video'},
                ]} type="tag" />
              </Form.Item>
            </div>
            <div className={`${styleForm['filter-wrapper__form-item']} ${styleForm['sort-by']}`}>
              <p className={styleForm.label}>Sort by</p>
              <Form.Item name="sortBy">
                <RadioButton buttons={[
                  {text: 'Trending', value: 'trending'},
                  {text: 'New items', value: 'new-items'},
                  {text: 'Price low-high', value: 'price_l-h'},
                  {text: 'Price high-low', value: 'price_h-l'},
                ]} type="tag" />
              </Form.Item>
            </div>
            <div className={styleForm['filter-wrapper__form-item']}>
              <p className={styleForm.label}>Options</p>
              <Form.Item name="options">
                <CheckboxAntd.Group className={styleForm['checkbox-group']}>
                  <Checkbox value="lazy" label="Show lazy minted items" />
                  <Checkbox value="nsfw" label="Show NSFW" />
                </CheckboxAntd.Group>
              </Form.Item>
            </div>
            <div className={styleForm['filter-wrapper__form-item']}>
              <p className={styleForm.label}>Quantity</p>
              <div className={styleForm['slider-wrapper']}>
                <Form.Item name="quantity">
                  <Slider
                    range
                    max={100}
                    className={styleForm['slider-wrapper__slider']}
                  />
                </Form.Item>
                <div className={styleForm['slider-wrapper__range-inputs']}>
                  <Form.Item name={['quantity', 0]}>
                    <InputNumber
                      min={1}
                      max={100}
                      controls={false}
                      placeholder="From"
                      className={styleForm['input']}
                    />
                  </Form.Item>
                  <Icon name='arrow-right_outlined' className={styleForm.icon} />
                  <Form.Item name={['quantity', 1]}>
                    <InputNumber
                      min={1}
                      max={100}
                      controls={false}
                      placeholder="To"
                      className={styleForm['input']}
                    />
                  </Form.Item>
                </div>
              </div>
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

export default CollectionsForm