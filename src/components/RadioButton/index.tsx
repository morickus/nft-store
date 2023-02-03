import { FC } from 'react'
import { Radio } from 'antd'
import styles from './RadioButton.module.scss'

interface Button {
  text: string
  value: string
  onClick?(): void
}

interface IRadioButton {
  buttons: Button[]
  defaultValue?: string
  onChange?(): void
}

const RadioButton: FC<IRadioButton> = (props) => {
  const { buttons, defaultValue, onChange } = props

  return (
    <Radio.Group defaultValue={defaultValue} buttonStyle="solid" className={styles.root} onChange={onChange}>
      {buttons.map(i => (
        <Radio.Button
          key={i.value}
          value={i.value}
          onClick={i.onClick}
          className={styles.item}
        >
          {i.text}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default RadioButton