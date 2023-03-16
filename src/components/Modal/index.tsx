import { FC } from 'react'
import IconButton from '@/components/IconButton'
import { Modal as ModalAntd, ModalProps } from 'antd'
import styled from '@emotion/styled'

const Modal: FC<ModalProps> = (props) => {
  const { children } = props
  console.log('props ',props)
  return (
    <ModalBase
      centered
      closeIcon={<IconButton icon="close_outlined" colorIcon="default" sizeIcon={16} size={40} />}
      {...props}
    >
      {children}
    </ModalBase>
  );
};

const ModalBase = styled(ModalAntd)`
  border: 2px solid var(--light-gray-color);
  
  .ant-modal-close {
    top: 10px;
    width: 36px;
    height: 36px;
    inset-inline-end: 10px;
  }

  @media (max-width: 767.98px) {
    .modal-wrap {
      padding: 56px 12px 36px;
    }
  }
`;

export default Modal