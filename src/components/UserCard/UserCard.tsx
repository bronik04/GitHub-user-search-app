import styles from './UserCard.module.scss';
import { UserStat } from '../UserStat';
import { LocalGitHabUser } from '../../types';
import { UserTitle } from '../UserTitle';
import { UserInfo } from '../UserInfo';

interface UserCardProps extends LocalGitHabUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
      className={styles.avatar}
      src={props.avatar}
      alt={props.login}
    />
    <UserTitle
      login={props.login}
      name={props.name}
      created={props.created}
    />
    <p
      className={styles.bio}
    >
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      company={props.company}
      blog={props.blog}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
