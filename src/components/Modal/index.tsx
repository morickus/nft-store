import { FC } from 'react'
import IconButton from '@/components/IconButton'
import { Modal as ModalAntd, ModalProps } from 'antd'
import styled from '@emotion/styled'

const Modal: FC<ModalProps> = (props) => {
  const { children } = props

  return (
    <ModalBase
      centered
      closeIcon={<IconButton icon="close_outlined" colorIcon="default" sizeIcon={16} size={36} />}
      {...props}
    >
      {children}
    </ModalBase>
  );
};

const ModalBase = styled(ModalAntd)`
  border: 2px solid #F7F7F7;
  
  .ant-modal-close {
    top: 10px;
    width: 36px;
    height: 36px;
    inset-inline-end: 10px;
  }
`;

export default Modal