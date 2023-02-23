import { FC } from 'react'
import styled from '@emotion/styled'
import { Slider as SliderAntd } from 'antd'
import { SliderRangeProps } from 'antd/es/slider'

const Slider: FC<SliderRangeProps> = (props) => {
  return (
    <SliderBase {...props} />
  );
};

const SliderBase = styled(SliderAntd)`
  margin: 0 0 0 6px;

  .ant-slider-rail {
    &:after, &:before {
      width: 8px;
      height: 8px;
      content: '';
      position: absolute;
      background: #F7F7F7;
      transform: translateY(-3px);
    }

    &:after {
      left: -4px;
    }

    &:before {
      right: -4px;
    }
  }

  .ant-slider-handle:after {
    border-radius: 0;
  }
`;

export default Slider