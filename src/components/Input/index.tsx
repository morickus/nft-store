import { FC } from 'react'
import styled from '@emotion/styled'
import { Input as InputAntd, InputProps } from 'antd'

const Input: FC<InputProps> = (props) => {
  return (
    <InputBase {...props} />
  );
};

const InputBase = styled(InputAntd)`
`;

export default Input