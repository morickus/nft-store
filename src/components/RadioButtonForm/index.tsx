import { FC } from 'react'
import { Radio } from 'antd'
import styles from './RadioButtonForm.module.scss'

interface Button {
  text: string
  value: string
}

interface IRadioButtonForm {
  value?: string
  buttons: Button[]
  onChange?(): void
}

const RadioButtonForm: FC<IRadioButtonForm> = (props) => {
  const { buttons, value, onChange } = props

  return (
    <Radio.Group value={value} buttonStyle="solid" className={styles.root} onChange={onChange}>
      {buttons.map(i => (
        <Radio.Button
          key={i.value}
          value={i.value}
          className={styles.item}
        >
          {i.text}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default RadioButtonForm