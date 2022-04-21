import { useState,useEffect,lazy,Suspense } from "react";
import { useParams, Link, Route,Routes,useNavigate} from "react-router-dom";
import PropType from 'prop-types';
import { detailsMovie } from "services/services";
import styles from '../MovieDetailsPage/MovieDetails.module.css';

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const MovieDetails = () => { 
    
  const [mov, setMov] = useState('');
  const { movId } = useParams();
  const navigate = useNavigate();

   const goBack = () => navigate(-1)
  
  useEffect(() => { 
    detailsMovie(movId).then(setMov)
  },[movId])

   return (
  
     <div className={styles.wrapper}>
       {mov && (
         <>
           <img className={styles.img} src={`https://image.tmdb.org/t/p/w300/${mov.poster_path}`} alt={mov.original_title} />
           <div className={styles.descr}>
             <button className={styles.btnBack} onClick={goBack} >Go Back</button>
             <h2>{mov.original_title} / Release date: {mov.release_date}</h2>
             <p className={styles.score}>Use score: {mov.vote_average * 10}</p>
             <p className={styles.descrText}>Overwiev:</p>
             <p className={styles.descrText}>{mov.overview}</p>
             <p className={styles.descrText}>Genres: {mov.tagline}</p>
             {!mov.tagline && <p>NO INFO</p>}
             <hr />
             <ul>
               <li>
                 <Link to='cast'>Cast</Link>
               </li>
               <li>
                 <Link to='reviews'>Review</Link>
               </li>
             </ul>
             <hr />
             <Suspense fallback={<p>Please wait....loading...</p>}>
               <Routes>
                 <Route path='cast' element={<Cast />} />
                 <Route path='reviews' element={<Reviews />} />
               </Routes>
             </Suspense>
           </div>
         </>
       )}
     </div>
   );
}

MovieDetails.proptype = {
  id: PropType.number.isRequired,
  poster_path: PropType.string.isRequired,
  vote_average: PropType.number.isRequired,
  release_date: PropType.string.isRequired,
  overview: PropType.string.isRequired,
  tagline:PropType.string.isRequired
}

export default MovieDetails;