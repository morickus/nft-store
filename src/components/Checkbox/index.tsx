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
    text-align: left;
    font-size: ${({ theme }) => theme.components.Checkbox.fontSize}px;
    font-weight: ${({ theme }) => theme.components.Checkbox.fontWeight};
    transition: color .3s ease;
    
    a {
      text-decoration: underline;
      color: ${({ theme }) => theme.token.colorPrimary};
      
      &:hover {
        text-decoration: none;
      }
    }
  }

  &:not(:has(a:hover)):hover {
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
    
    & + span {
      padding-inline-end: 0;
    }

    .ant-checkbox-inner {
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