import { useEffect, useState } from 'react';
import { useSearchParams,Link,useLocation } from "react-router-dom";
import { fetchSearchMovie } from 'services/services';
import styles from '../MoviesPage/MoviesPage.module.css';


export const MoviesPage = () => { 
  const [mov, setMov] = useState(null);
  const [searchParms, setSearchParams] = useSearchParams();
  const currentQuery = searchParms.get('query');
  const location = useLocation();
  
  

  useEffect(() => { 
    if (currentQuery) { 
      fetchSearchMovie(currentQuery).then(setMov);
    }
   
  }, [currentQuery])
  
  
    
  const onHandleSubmit = (e) => { 
    e.preventDefault()
    const form = e.currentTarget;
    const query = form.search.value;
    if (query.trim() === '') { 
      alert('error');
      return;
    }
    setSearchParams({ query: query })
    
  }

  return (
    <>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input type="search" name="search" />
        <button type="submit">Search...</button>
      </form>
      {mov && (
        <>
          <h1 className={styles.title}>SEARCHING RESULTS</h1>
          {mov.length > 0 && (
            <ul className={styles.list}>
              {mov.map((m) => {
                return (
                  <div className=''>
                   
                    <li className={styles.item} key={m.id}>
                      <img className={styles.img} src={`https://image.tmdb.org/t/p/w300/${m.poster_path}`} alt={m.title} />
                      <Link className={styles.link} to={`${m.id}`} state={{ from: location }} title='Detailed description'>{m.title}</Link>
                    </li>
                  </div>
                )
              })}
            </ul>
          )}
          {mov.length === 0 && (<>do not found</>)}
        </>
      )}
    </>
  );
}