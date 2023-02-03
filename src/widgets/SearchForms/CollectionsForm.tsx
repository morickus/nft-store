import { FC, useState } from 'react'
import styleForm from './Form.module.scss'
import { Form, Input, InputNumber, Checkbox as CheckboxAntd, Slider } from 'antd'
import IconButton from '@/components/IconButton'
import Icon from '@/components/Icon'
import Select from '@/components/Select'
import { optionsCryptoWallet, optionsTrending } from '../../../store'
import RadioButtonForm from '@/components/RadioButtonForm'
import Checkbox from '@/components/Checkbox'

interface ICollectionsForm {

}

const CollectionsForm: FC<ICollectionsForm> = () => {
  const [form] = Form.useForm();
  const [openFilter, setOpenFilter] = useState(false);
  const defaultQuantity: [number, number] = [10, 55]
  const [slider, setSlider] = useState<[number, number]>(defaultQuantity);

  return (
    <div className={styleForm.root}>
      <Form
        form={form}
        initialValues={{
          wallet: 'eth',
          options: ['lazy'],
          sortBy: 'trending',
          quantity: {
            from: defaultQuantity[0],
            to: defaultQuantity[1]
          }
        }}
        className={styleForm.form}
      >
        <Form.Item name="wallet">
          <Select options={optionsCryptoWallet} withPrefix />
        </Form.Item>
        <Form.Item name="search" className={styleForm.search}>
          <Input placeholder="Search" prefix={<Icon name="search_outlined" className={styleForm['prefix-icon']} />} className={styleForm.input} />
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
          <IconButton icon="refresh_outlined" sizeIcon="16" onClick={() => form.resetFields()} />
        </div>
        <div className={`${styleForm['filter-wrapper']} ${openFilter && styleForm.visible}`}>
          <div className={styleForm['filter-wrapper__form']}>
            <div className={styleForm['filter-wrapper__form-item']}>
              <p className={styleForm.label}>Functional</p>
              <Form.Item name="functional">
                <RadioButtonForm buttons={[
                  {text: 'Collect', value: 'collect'},
                  {text: 'Stack', value: 'stack'},
                  {text: 'Gaming', value: 'gaming'},
                  {text: 'Finance', value: 'finance'},
                  {text: 'Logistic', value: 'logistic'},
                ]} />
              </Form.Item>
            </div>
            <div className={styleForm['filter-wrapper__form-item']}>
              <p className={styleForm.label}>Media</p>
              <Form.Item name="media">
                <RadioButtonForm buttons={[
                  {text: 'Image', value: 'image'},
                  {text: 'GIF', value: 'gif'},
                  {text: 'Interactive', value: 'interactive'},
                  {text: '3D', value: '3d'},
                  {text: 'Video', value: 'video'},
                ]} />
              </Form.Item>
            </div>
            <div className={`${styleForm['filter-wrapper__form-item']} ${styleForm['sort-by']}`}>
              <p className={styleForm.label}>Sort by</p>
              <Form.Item name="sortBy">
                <RadioButtonForm buttons={[
                  {text: 'Trending', value: 'trending'},
                  {text: 'New items', value: 'new-items'},
                  {text: 'Price low-high', value: 'price_l-h'},
                  {text: 'Price high-low', value: 'price_h-l'},
                ]} />
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
                <Form.List name="quantity">
                  {() => (
                    <>
                      <Slider
                        range
                        max={100}
                        value={slider}
                        defaultValue={[defaultQuantity[0], defaultQuantity[1]]}
                        className={`antd-slider ${styleForm['slider-wrapper__slider']}`}
                        onChange={(value) => {
                          setSlider(value)
                          form.setFieldsValue({ quantity: { from: value[0], to: value[1] } });
                        }}
                      />
                      <div className={styleForm['slider-wrapper__range-inputs']}>
                        <Form.Item name="from">
                          <InputNumber
                            min={1}
                            max={100}
                            controls={false}
                            placeholder="From"
                            className={styleForm['input']}
                            onChange={e => setSlider(prev => [e || 0, prev[1]])}
                          />
                        </Form.Item>
                        <Icon name='arrow-right_outlined' className={styleForm.icon} />
                        <Form.Item name="to">
                          <InputNumber
                            min={1}
                            max={100}
                            controls={false}
                            placeholder="To"
                            className={styleForm['input']}
                            onChange={e => setSlider(prev => [prev[0], e || 100])}
                          />
                        </Form.Item>
                      </div>
                    </>
                  )}
                </Form.List>
              </div>
            </div>
          </div>
          <IconButton
            sizeIcon="24"
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