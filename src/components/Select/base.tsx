import { FC, ReactNode } from 'react'
import Icon from '@/components/Icon'
import styled from '@emotion/styled'
import { Select as SelectAntd, SelectProps } from 'antd'
import { IconNamesMap } from '@/components/Icon/types'
import { css } from '@emotion/react'

const { Option } = SelectAntd

interface IOption {
  label: string
  value: string
}

interface ISelect {
  prefix?: ReactNode
  options: IOption[]

  onChange?(): void
}

const Select: FC<ISelect & SelectProps> = (props) => {
  const { value, onChange, prefix, options, size } = props

  return (
    <SelectBase
      size={size}
      value={value}
      onChange={onChange}
      className={`base-select`}
      popupClassName={`base-select-dropdown`}
      suffixIcon={<Icon name="chevron-up-down_outlined" fontSize={24} />}
    >
      {options.map(i => (
        <Option value={i.value} key={i.value}>
          <span>
            <div className="prefix">{prefix}</div>
            <span>{i.label}</span>
          </span>
          <Icon name="check_outlined" className={`option_check-icon`} fontSize={16} />
        </Option>
      ))}
    </SelectBase>
  )
}

const SelectBase = styled(SelectAntd)`${({ theme: { components: { Select: s } } }) => css`
  width: 100%;
  
  .ant-select-selector {
    .ant-select-selection-item {
      & > span {
        display: flex;
        align-items: center;

        span {
          font-weight: 500;
        }
      }

      .prefix {
        display: flex;
        align-items: center;
      }

      .option_check-icon {
        display: none;
      }
    }
  }
`}`

export default Select
