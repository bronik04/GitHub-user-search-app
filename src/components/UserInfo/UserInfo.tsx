import styles from './UserInfo.module.scss';
import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as WebSiteIcon } from 'assets/icon-website.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';

import { LocalGitHabUser } from '../../types';
import {InfoItem, InfoItemProps} from '../InfoItem';

interface UserInfoProps
  extends Pick<
    LocalGitHabUser,
    'blog' | 'company' | 'location' | 'twitter'
  > {}

export const UserInfo = ({
  blog,
  twitter,
  location,
  company,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    { icon: <LocationIcon />, text: location },
    { icon: <WebSiteIcon />, text: blog, isLink: true },
    { icon: <TwitterIcon />, text: twitter },
    { icon: <CompanyIcon />, text: company },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};
