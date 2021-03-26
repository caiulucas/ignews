import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export const Header: React.FC = () => (
  <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <img src="/images/logo.svg" alt="ig.news" />
      <nav>
        <a className={styles.active} href="http://localhost:3000">
          Home
        </a>
        <a href="http://localhost:3000">Posts</a>
      </nav>
      <SignInButton />
    </div>
  </header>
);
