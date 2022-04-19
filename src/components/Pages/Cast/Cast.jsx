import { useState, useEffect } from 'react';
import PropType from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchCast } from "services/services";
import styles from '../Cast/Cast.module.css';


 const Cast = () => { 
  const [cast, setCast] = useState(null);
  const { movId } = useParams()

  useEffect(() => { 
    fetchCast(movId)
      .then(res => res.cast)
      .then(setCast)
  },[movId])

  return (
    <>
      <ul className={styles.listActors}>
        {cast && cast.map(cas => <li className={styles.item} key={cas.id}>
          <img src={`https://image.tmdb.org/t/p/w300/${cas.profile_path}`} alt={cas.name} />
          {!cas.profile_path && (
            <p className={styles.defCard}>NO PHOTO</p>
          )}
          <p className={styles.cardText}>Name:{cas.name}</p>
          <p className={styles.cardText}>Character: {cas.character}</p>
        </li>)}
      </ul>
    </>
  );
}

Cast.protype = {
  id: PropType.number.isRequired,
  profile_path: PropType.string.isRequired,
  name: PropType.string.isRequired,
  character:PropType.string.isRequired
}


export default Cast;