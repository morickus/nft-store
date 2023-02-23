import { FC } from 'react'
import { Radio, RadioGroupProps, RadioProps } from 'antd'
import styles from './RadioButtonForm.module.scss'

interface IRadioButtonForm {
  buttons: Array<RadioProps & {text: string}>
}

const RadioButtonForm: FC<IRadioButtonForm & RadioGroupProps> = (props) => {
  const { buttons, value, onChange } = props

  return (
    <Radio.Group {...props} value={value} buttonStyle="solid" className={styles.root} onChange={onChange}>
      {buttons.map((i, index) => (
        <Radio.Button
          {...i}
          key={index}
          className={`${styles.item} ${i.className}`}
        >
          {i.text}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default RadioButtonForm