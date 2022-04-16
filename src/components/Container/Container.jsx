import PropType from 'prop-types';
import styles from '../Container/Container.module.css';

export const Container = ({children}) => { 
  return (
    <div className={styles.container}>{children}</div>
 )
}

Container.proptype = {
  children:PropType.node.isRequired
}
