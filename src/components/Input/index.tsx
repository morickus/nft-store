import { FC } from 'react'
import { Input as InputAntd, InputProps } from 'antd'

const Input: FC<InputProps> = (props) => {
  return (
    <InputAntd {...props} />
  );
};

export default Input