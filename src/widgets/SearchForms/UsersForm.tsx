import { FC } from 'react'
import styleForm from './Form.module.scss'
import { Form } from 'antd'
import IconButton from '@/components/IconButton'
import Icon from '@/components/Icon'
import dynamic from 'next/dynamic'

const Input = dynamic(() => import('@/components/Input'), { ssr: false })

interface IUsersForm {

}

const UsersForm: FC<IUsersForm> = () => {
  const [form] = Form.useForm();

  return (
    <div className={styleForm.root}>
      <Form
        form={form}
        initialValues={{}}
        className={`${styleForm.form} ${styleForm['user-form']}`}
        onValuesChange={(_, value) => console.log('form: ',value)}
      >
        <Form.Item name="search" className={styleForm.search}>
          <Input placeholder="Search" size="small" prefix={<Icon name="search_outlined" className={styleForm['prefix-icon']} fontSize={16} color="grey" />} className={styleForm.input} />
        </Form.Item>
        <IconButton icon="refresh_outlined" sizeIcon={16} onClick={() => form.resetFields()} />
      </Form>
    </div>
  );
};

export default UsersForm