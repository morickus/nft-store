import { FC } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button as ButtonAntd, ButtonProps } from 'antd'

interface IButton {
  safety?: boolean
}

const Button: FC<IButton & ButtonProps> = (props) => {
  return props.type === 'default'
    ? <ButtonDefault {...props} />
    : <ButtonOther {...props} />;
};

Button.defaultProps = {
  type: 'default',
  size: 'middle',
};

const ButtonOther = styled(ButtonAntd)`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.components.Button.fontWeight};
  background: ${(props: IButton & ButtonProps) => (props.safety ? ({ theme }) => theme.components.Button.colorSafety : ({ theme }) => theme.token.colorPrimary)};
  
  &:not(:disabled) {
    &:hover {
      background: ${(props: IButton & ButtonProps) => (props.safety ? ({ theme }) => theme.components.Button.colorSafetyHover : ({ theme }) => theme.token.colorPrimaryHover)};
    }

    &:active {
      background: ${(props: IButton & ButtonProps) => (props.safety ? ({ theme }) => theme.components.Button.colorSafetyActive : ({ theme }) => theme.token.colorPrimaryActive)};
    }
  }
`;

const ButtonDefault = styled(ButtonAntd)`${({ theme: { components: { Button: btn } } }) => css`
  display: flex;
  align-items: center;
  font-weight: ${btn.fontWeight};
  border: 2px solid var(--light-gray-color) !important;
  
  & > div {
    display: none;
  }
  
  &:hover {
    color: ${btn.colorPrimary} !important;
    border-color: var(--light-gray-color) !important;
    background: var(--light-gray-color) !important;
  }

  &:active {
    color: ${btn.colorPrimary} !important;
    background: #D6D6D6 !important;
  }
`}`;

export default Button
