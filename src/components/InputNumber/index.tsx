import { FC } from 'react'
import styled from '@emotion/styled'
import { InputNumber as InputNumberAntd, InputNumberProps } from 'antd'

const InputNumber: FC<InputNumberProps> = (props) => {
  return (
    <InputNumberBase {...props} />
  );
};

const InputNumberBase = styled(InputNumberAntd)`
`;

export default InputNumber