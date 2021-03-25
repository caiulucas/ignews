import { SignInbutton } from '../SignInButton';
import styles from './styles.module.scss';

export const Header: React.FC = () => (
  <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <img src="/images/logo.svg" alt="ig.news" />
      <nav>
        <a className={styles.active} href="https://localhost:3000">
          Home
        </a>
        <a href="https://localhost:3000">Posts</a>
      </nav>
      <SignInbutton />
    </div>
  </header>
);
