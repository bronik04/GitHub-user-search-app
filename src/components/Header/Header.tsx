import {ThemeSwitcher} from "../ThemeSwitcher";
import styles from './Header.module.scss';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
        DevFinder
    </div>
      <ThemeSwitcher/>
  </div>
);
