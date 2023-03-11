import React, { FC, useEffect, useState } from 'react'
import { Form, Upload as UploadAntd } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadProps } from 'antd/es/upload/interface'
import IconButton from '@/components/IconButton'
import styles from './UploadImage.module.scss'
import styled from '@emotion/styled'
import Icon from '@/components/Icon'
import { getBase64 } from '@/utils'

interface IUploadImage {
  typeButton?: 'icon-button'
  valueImage?: UploadChangeParam
  size?: 'small' | 'middle' | 'large'
  maxSizeImage?: number
  resolution?: {
    width: number
    height: number
  }
}

const UploadImage: FC<IUploadImage & UploadProps> = (props) => {
  const { className, size = 'middle', valueImage, maxSizeImage, resolution, typeButton } = props
  const [imageUrl, setImageUrl] = useState<string>()
  const { status } = Form.Item.useStatus()

  useEffect(() => {
    valueImage && getBase64(valueImage.file.originFileObj as RcFile, (url) => {
      setImageUrl(url)
    })
  }, [valueImage])

  return (
    <Upload
      {...props}
      listType="picture-card"
      showUploadList={false}
      className={`${styles.root} status-${status} ${styles[`status-${status}`]} ${className}`}
    >
      {imageUrl ? <img src={imageUrl} className={styles.image} alt="image" /> : ((typeButton == 'icon-button') ? (
          <IconButton icon="image_solid" colorIcon="grey" sizeIcon={18} size={40} className={styles['icon-button']} />
        ) : (
          <div className={styles.placeholder}>
            <Icon name="image_stroke" fontSize={size == 'middle' ? 48 : 64} color="grey" />
            <p className={styles.label}>Upload image</p>
            <div className={styles.desc}>
              {resolution && (<span>{resolution.width} x {resolution.height}</span>)}
              {maxSizeImage && (<span>max. {maxSizeImage} mb</span>)}
            </div>
          </div>
        )
      )}
    </Upload>
  );
};


const Upload = styled(UploadAntd)`
  .ant-upload.ant-upload-select {
    width: 100% !important;
    height: 100% !important;
    
    border: ${(props: IUploadImage & UploadProps) => (props.typeButton == 'icon-button' && 'none !important')};
  }
`;

export default UploadImage