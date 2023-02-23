import { FC } from 'react'
import styled from '@emotion/styled'
import { Switch as SwitchAntd, SwitchProps } from 'antd'

const Switch: FC<SwitchProps> = (props) => {
  return (
    <SwitchBase {...props} />
  );
};

const SwitchBase = styled(SwitchAntd)`
  border: 1px solid var(--primary-color);
  min-width: 24px;
  height: 16px;
  width: 24px;
  
  .ant-switch-handle {
    width: 10px !important;
    height: 10px !important;
  }
  .ant-switch-handle:before {
    background: var(--primary-color) !important;
  }
  &.ant-switch-checked .ant-switch-handle {
    inset-inline-start: calc(100% - 12px) !important;
    &:before {
      background: #FFFFFF !important;
    }
  }
`;

export default Switch