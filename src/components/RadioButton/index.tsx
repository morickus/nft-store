import { FC } from 'react'
import { Radio, RadioGroupProps, RadioProps } from 'antd'
import styles from './RadioButton.module.scss'

interface IRadioButton {
  buttons: Array<RadioProps & {text: string}>
}

const RadioButton: FC<IRadioButton & RadioGroupProps> = (props) => {
  const { buttons, defaultValue, onChange } = props

  return (
    <Radio.Group defaultValue={defaultValue} buttonStyle="solid" className={styles.root} onChange={onChange} {...props}>
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

export default RadioButton