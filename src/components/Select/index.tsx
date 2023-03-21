import { FC } from 'react'
import Icon from '@/components/Icon'
import styled from '@emotion/styled'
import { Select as SelectAntd, SelectProps } from 'antd'
import { IconNamesMap } from '@/components/Icon/types'
import { css } from '@emotion/react'

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

  onChange?(): void
}

const Select: FC<ISelect & SelectProps> = (props) => {
  const { value, onChange, withPrefix, options } = props

  return (
    <SelectBase
      value={value}
      onChange={onChange}
      className={`select-antd ${withPrefix && 'select-antd-with-prefix'}`}
      popupClassName={`select-dropdown-antd ${withPrefix && 'select-antd-with-prefix'}`}
      suffixIcon={<Icon name="chevron-up-down_outlined" color="primary" />}
    >
      {options.map(i => (
        <Option value={i.value} key={i.value}>
          <span>
            {i.prefixIcon && <Icon name={i.prefixIcon} className="option-icon" fontSize={16} />}
            <span>{i.label}</span>
            <span className="space" />
          </span>
          <Icon name={i.suffixIcon || "check_outlined"} className={`option_check-icon ${i.suffixIcon && 'suffix-icon'}`} fontSize={16} />
        </Option>
      ))}
    </SelectBase>
  )
}

const SelectBase = styled(SelectAntd)`${({ theme: { components: { Select: s } } }) => css`
  width: max-content !important;

  &.select-antd-with-prefix {
    .ant-select-selector {
      .ant-select-selection-item {
        padding-inline-end: 0;
        span {
          span {
            justify-content: center;
          }
        }
        
        .option-icon {
          display: block;
        }
      }
    }
  }

  &.ant-select-open {
    .ant-select-selector {
      background: ${s.colorPrimary};
      border-color: ${s.colorPrimary} !important;
      &:hover {
        background: ${s.colorPrimary};
        border-color: ${s.colorPrimary};
      }
      .ant-select-selection-item, .option-icon {
        color: #FFFFFF !important;
      }
    }
    .ant-select-arrow {
      transform: rotate(180deg);
      i {
        color: #FFFFFF;
      }
    }
  }

  .ant-select-selector {
    display: flex;
    align-items: center;
    padding: 0 12px !important;
    box-shadow: none !important;
    transition: all .3s ease !important;
    height: ${s.controlHeight}px !important;
    border: ${s.lineWidth}px solid ${s.colorBorder} !important;
    @media (max-width: 479.98px) {
      padding: 0 6px !important;
    }
    &:hover {
      background: ${s.colorBorder};
    }

    .ant-select-selection-item {
      display: flex;
      align-items: center;
      padding-inline-end: 0;
      color: ${s.colorPrimary};
      font-weight: ${s.fontWeight};

      span {
        gap: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 479.98px) {
          gap: 11px;
        }
        span {
          width: 83px;
        }
        .space {
          width: 16px;
        }
      }

      .option-icon {
        display: none;
        color: ${s.colorPrimary};
      }
      .option_check-icon {
        display: none;
      }
    }
  }

  .ant-select-arrow {
    width: 16px;
    height: 16px;
    margin-top: -8px;
    inset-inline-end: 12px;
    transition: all .3s ease !important;
    @media (max-width: 479.98px) {
      inset-inline-end: 8px;
    }
  }
`}`

export default Select
