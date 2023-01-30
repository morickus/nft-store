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
}

const RadioButton: FC<IRadioButton> = (props) => {
  const { buttons, defaultValue } = props

  return (
    <>
      <style jsx global>{`
        .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
          background: var(--primary-color);
        }
        .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
          background: var(--primary-color);
        }
        .ant-radio-group-solid .ant-radio-button-wrapper:hover {
          color: var(--primary-color);
        }
        .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
          color: #FCFCFC;
        }
      `}</style>
      <Radio.Group defaultValue={defaultValue} buttonStyle="solid" className={styles.root}>
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
    </>
  );
};

export default RadioButton