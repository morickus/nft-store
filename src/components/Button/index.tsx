import { FC } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button as ButtonAntd, ButtonProps } from 'antd'

const Button: FC<ButtonProps> = (props) => {
  return props.type === 'default'
    ? <ButtonDefault {...props} />
    : <ButtonOther {...props} />;
};

Button.defaultProps = {
  type: 'default',
  size: 'middle',
};

const ButtonOther = styled(ButtonAntd)`
    font-weight: ${({ theme }) => theme.components.Button.fontWeight};
`;

const ButtonDefault = styled(ButtonAntd)`${({ theme: { components: { Button: btn } } }) => css`
  font-weight: ${btn.fontWeight};
  border: 2px solid #F7F7F7 !important;
  
  & > div {
    display: none;
  }
  
  &:hover {
    color: ${btn.colorPrimary} !important;
    border-color: #F7F7F7 !important;
    background: #F7F7F7 !important;
  }

  &:active {
    color: ${btn.colorPrimary} !important;
    background: #D6D6D6 !important;
  }
`}`;

export default Button
