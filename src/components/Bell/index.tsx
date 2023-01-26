import { FC } from 'react'
import styles from './Bell.module.scss'
import Icon from '@/components/Icon'

interface IBell {
  count?: number;
}

const Bell: FC<IBell> = (props) => {
  const { count } = props;

  return (
    <div className={styles.root}>
      <Icon name="notify_stroke" className={styles.bell} />
      {!!count && <div className={styles.counter}>{count}</div>}
    </div>
  );
};

export default Bell;
