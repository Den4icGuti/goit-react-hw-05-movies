import { useState,useEffect } from "react";
import { useParams, Link, useRouteMatch,Route } from "react-router-dom";
import { Cast } from "../Cast/Cast";
import { detailsMovie } from "services/services";
import styles from '../MovieDetailsPage/MovieDetails.module.css';

export const MovieDetails = () => { 
  const [mov, setMov] = useState('')
  const { movId } = useParams()
  const { url } = useRouteMatch()
  
  useEffect(() => { 
    detailsMovie(movId).then(setMov)
  },[movId])


  return (
    <div className={styles.wrapper}>
     {mov && (
        <>
          <img className={styles.img} src={`https://image.tmdb.org/t/p/w300/${mov.poster_path}`} alt={mov.original_title} />
          <div className={styles.descr}>
            <h2>{mov.original_title} / Release date: {mov.release_date}</h2>
            <p className={styles.score}>Use score: {mov.vote_average * 10}</p>
            <p className={styles.descrText}>Overwiev:</p>
            <p className={styles.descrText}>{mov.overview}</p>
            <p className={styles.descrText}>Genres: {mov.tagline}</p>
            {!mov.tagline && <p>NO INFO</p>}
            <hr />
            <ul>
              <li>
                <Link to={`${url}/cast`}>Cast</Link>
              </li>
              <li>
                {/* <Link to={`${url}/review`}>Review</Link> */}
              </li>
            </ul>
          <hr />
            <Route path={`/movies/:movId`}>
              <Cast/>
            </Route>

           </div>
         
        </>
        
       
      )}
    </div>
  )
}