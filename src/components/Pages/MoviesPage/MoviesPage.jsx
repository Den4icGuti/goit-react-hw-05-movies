import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropType from 'prop-types';
import { useSearchParams,Link,useLocation } from "react-router-dom";
import { fetchSearchMovie } from 'services/services';
import styles from '../MoviesPage/MoviesPage.module.css';


 const MoviesPage = () => { 
  const [mov, setMov] = useState(null);
  const [searchParms, setSearchParams] = useSearchParams();
   const currentQuery = searchParms.get('query');
   const location = useLocation();
   const notify = () => toast.warn('The field must not be empty');
   
  useEffect(() => { 
    if (currentQuery) { 
      fetchSearchMovie(currentQuery).then(setMov);
    }
  },[currentQuery])
  
  const onHandleSubmit = (e) => { 
    e.preventDefault()
    
    const form = e.currentTarget;
    const query = form.search.value;
    if (query.trim() === '') { 
      notify();
      return;
    }
    setSearchParams({ query: query })
  }

  return (
    <>
      <ToastContainer
        theme='dark'
        autoClose={2000}
      />
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input type="search" name="search" />
        <button type="submit">Search...</button>
      </form>
      {mov && (
        <>
          <h1 className={styles.title}>SEARCHING RESULTS</h1>
          {mov.length > 0 && (
            <ul className={styles.list}>
              {mov.map(m => 
                  <li key={m.id} className={styles.item} >
                      <img className={styles.img} src={`https://image.tmdb.org/t/p/w300/${m.poster_path}`} alt={m.title} />
                  <Link className={styles.link} to={`${m.id}`} state={{from:location}} title='Detailed description'>{m.title}</Link>
                </li>
              )}
            </ul>
          )}
          {mov.length === 0 && (<p className={styles.errorMessage}>Oops...nothing found.....</p>)}
        </>
      )}
    </>
  );
}

MoviesPage.proptype = {
  id: PropType.number.isRequired,
  poster_path: PropType.node.isRequired,
  title: PropType.string.isRequired,
}

export default MoviesPage;

