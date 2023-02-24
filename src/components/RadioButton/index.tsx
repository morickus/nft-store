import { FC } from 'react'
import { Radio, RadioGroupProps, RadioProps } from 'antd'
import styled from '@emotion/styled'

interface IRadioButton {
  type?: 'tab' | 'tag'
  buttons: Array<RadioProps & {text: string}>
}

const RadioButton: FC<IRadioButton & RadioGroupProps> = (props) => {
  const { buttons, type } = props

  return type === 'tag' ? (
    <TagGroup {...props} buttonStyle="solid">
      {buttons.map((i, index) => (
        <Tag
          {...i}
          key={index}
        >
          {i.text}
        </Tag>
      ))}
    </TagGroup>
  ) : (
    <TabGroup {...props} buttonStyle="solid">
      {buttons.map((i, index) => (
        <Tab
          {...i}
          key={index}
        >
          {i.text}
        </Tab>
      ))}
    </TabGroup>
  );
};

RadioButton.defaultProps = {
  type: 'tab',
};

const TagGroup = styled(Radio.Group)`
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled(Radio.Button)`
  height: 36px;
  font-weight: 700;
  line-height: 32px;
  background: #FFFFFF;
  transition: all .3s ease;
  border: 2px solid #F7F7F7;
  font-size: 12px !important;
  color: ${({ theme }) => theme.token.colorPrimary};

  &:hover {
    background: #F7F7F7;
  }

  &:active {
    background: #D6D6D6;
    border: 2px solid #D6D6D6 !important;
  }

  &:before {
    display: none !important;
  }

  span {
    user-select: none;
  }
`;

const TabGroup = styled(Radio.Group)`
  padding: 2px;
  border: 2px solid #F7F7F7;

  @media (max-width: 767.98px) {
    width: 100%;
    display: flex;
    padding: 4px 4px 6px;
  }

  @media (max-width: 479.98px) {
    padding: 4px;
    flex-direction: column;
  }
`;

const Tab = styled(Radio.Button)`
  border: none;
  height: 28px;
  font-weight: 700;
  line-height: 28px;

  &:before {
    display: none !important;
  }

  &:not(:first-child) {
    margin-left: 4px;
  }

  span {
    user-select: none;
  }

  &:hover {
    color: ${({ theme }) => theme.token.colorPrimary};
  }

  @media (max-width: 767.98px) {
    width: 100%;
    height: 32px;
    line-height: 32px;
    text-align: center;

    &:not(:first-child) {
      margin-left: 0;
    }
  }

  @media (max-width: 479.98px) {
    height: 40px;
    font-size: 16px;
    line-height: 40px;

    &:not(:first-child) {
      margin-top: 4px;
    }
  }
`;

export default RadioButton