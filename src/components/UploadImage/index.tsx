import { FC, useEffect, useState } from 'react'
import { Upload as UploadAntd } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadProps } from 'antd/es/upload/interface'
import styles from './UploadImage.module.scss'
import styled from '@emotion/styled'
import Icon from '@/components/Icon'
import { getBase64 } from '@/utils'

interface IUploadImage {
  valueImage?: UploadChangeParam
  size?: 'small' | 'middle' | 'large'
  maxSizeImage: number
  resolution: {
    width: number
    height: number
  }
}

const UploadImage: FC<IUploadImage & UploadProps> = (props) => {
  const { className, size = 'middle', valueImage, maxSizeImage, resolution } = props
  const [imageUrl, setImageUrl] = useState<string>()

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
      className={`${styles.root} ${styles[`size_${size}`]} ${className}`}
    >
      {imageUrl ? <img src={imageUrl} className={styles.image} alt="image" /> : (
        <div className={styles.placeholder}>
          <Icon name="image_stroke" fontSize={size == 'middle' ? 48 : 64} color="grey" />
          <p className={styles.label}>Upload image</p>
          <div className={styles.desc}>
            <span>{resolution.width} x {resolution.height}</span>
            <span>max. {maxSizeImage} mb</span>
          </div>
        </div>
      )}
    </Upload>
  );
};

const Upload = styled(UploadAntd)`
  .ant-upload.ant-upload-select {
    width: 100% !important;
    height: 100% !important;
  }
`;

export default UploadImage