import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Checkbox as CheckboxAntd, CheckboxProps } from 'antd'

interface ICheckbox {
  label?: string | ReactNode
}

const Checkbox: FC<ICheckbox & CheckboxProps> = (props) => {
  const { label } = props

  return (
    <CheckboxBase {...props}>
      {label}
    </CheckboxBase>
  );
};

const CheckboxBase = styled(CheckboxAntd)`
  display: flex;
  align-items: center;

  & > span {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    transition: color .3s ease;
  }
  
  &.ant-checkbox-wrapper-checked {
    span {
      color: ${({ theme }) => theme.token.colorPrimary};
    }
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.token.colorPrimary};
    }

    .ant-checkbox-inner {
      border-color: ${({ theme }) => theme.token.colorPrimary} !important;
    }
  }

  .ant-checkbox {
    top: -1px;

    &:after {
      display: none;
    }

    &.ant-checkbox-checked .ant-checkbox-inner {
      background-color: transparent !important;

      &:after {
        opacity: 1 !important;
      }
    }
    
    &+span {
      padding-inline-end: 0;
    }

    .ant-checkbox-inner {
      padding: 2px;
      border-radius: 0;
      border: 1px solid ${({ theme }) => theme.components.Checkbox.colorBorder};

      &:after {
        top: 50%;
        left: 50%;
        opacity: 0;
        width: 12px;
        height: 12px;
        border: none;
        transition: opacity .2s ease;
        transform: translate(-50%,-50%);
        background: ${({ theme }) => theme.token.colorPrimary};
      }
    }
  }
`;

export default Checkbox