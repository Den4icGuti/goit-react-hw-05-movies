import { NavLink } from "react-router-dom";
import styles from '../Navigation/Navigation.module.css';


export const Navigation = () => { 
  return (
    
    <nav>
      <NavLink className={styles.link} to='/' > Home Page </NavLink>
      <NavLink className={styles.link} to='/movies'>Movies</NavLink>
      <hr />
    </nav>
  );
}