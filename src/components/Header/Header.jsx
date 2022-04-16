import styles from '../Header/Header.module.css';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => { 
  return (
    <header className={styles.header}>
        <Navigation/>
    </header>
  )
}
