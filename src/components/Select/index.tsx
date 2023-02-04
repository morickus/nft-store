import { FC } from 'react'
import Icon from '@/components/Icon'
import { Select as SelectAntd } from 'antd'
import { IconNamesMap } from '@/components/Icon/types'

const { Option } = SelectAntd

interface IOption {
  label: string
  value: string
  prefixIcon?: IconNamesMap
  suffixIcon?: IconNamesMap
}

interface ISelect {
  value?: string
  onChange?: (value: string) => void

  withPrefix?: boolean
  options: IOption[]
}

const Select: FC<ISelect> = (props) => {
  const { value, onChange, withPrefix, options } = props

  return (
    <SelectAntd
      value={value}
      onChange={onChange}
      className={`select-antd ${withPrefix && 'select-antd-with-prefix'}`}
      popupClassName={`select-dropdown-antd ${withPrefix && 'select-antd-with-prefix'}`}
      suffixIcon={<Icon name="chevron-up-down_outlined" color="primary" />}
    >
      {options.map(i => (
        <Option value={i.value} key={i.value}>
          <span>
            {i.prefixIcon && <Icon name={i.prefixIcon} color="primary" className="option-icon" />}
            <span>{i.label}</span>
          </span>
          <Icon name={i.suffixIcon || "check_outlined"} className="option_check-icon" />
        </Option>
      ))}
    </SelectAntd>
  );
};

export default Select