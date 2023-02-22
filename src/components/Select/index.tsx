import { FC } from 'react'
import Icon from '@/components/Icon'
import { Select as SelectAntd, SelectProps } from 'antd'
import { IconNamesMap } from '@/components/Icon/types'

const { Option } = SelectAntd

interface IOption {
  label: string
  value: string
  prefixIcon?: IconNamesMap
  suffixIcon?: IconNamesMap
}

interface ISelect {
  withPrefix?: boolean
  options: IOption[]
}

const Select: FC<ISelect & SelectProps> = (props) => {
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
            {i.prefixIcon && <Icon name={i.prefixIcon} className="option-icon" />}
            <span>{i.label}</span>
            <span className="space" />
          </span>
          <Icon name={i.suffixIcon || "check_outlined"} className={`option_check-icon ${i.suffixIcon && 'suffix-icon'}`} />
        </Option>
      ))}
    </SelectAntd>
  );
};

export default Select