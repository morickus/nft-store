import styles from './Users.module.scss'
import { users } from '../../../store'
import Button from '@/components/Button'
import UsersForm from '@/widgets/SearchForms/UsersForm'
import UserCard from '@/components/UserCard'

const Users = () => {
  return (
    <div className={styles.root}>
      <div className="wrapper-page">
        <h1 className="title">Users</h1>
        <div className={styles.form}>
          <UsersForm />
        </div>
        <div>
          <div className={styles['wrapper-card']}>
            {[...users,...users].map((i, index) => {
              let className = ''

              switch (index) {
                case 0: className = `${styles.crown} ${styles.gold}`
                  break
                case 1: className = `${styles.gold}`
                  break
                case 2: className = `${styles.silver}`
                  break
                case 3: className = `${styles.bronze}`
                  break
              }

              return (
                <UserCard key={index} {...i} className={className} />
              )
            })}
          </div>
          <div className={styles['wrapper-button']}>
            <Button size="large">Load more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users