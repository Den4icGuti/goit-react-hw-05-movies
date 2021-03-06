import { useState, useEffect } from "react";
import { traidingMovie } from "services/services";
import PropType from 'prop-types';
import { Link } from "react-router-dom";
import styles from '../HomePage/HomePage.module.css';

 const Home = () => { 
  const [mov, setMov] = useState(null);

  useEffect(() => { 
    traidingMovie()
      .then(res => res.results)
      .then(setMov)
  },[])

  return (
    <div>
      <h1 className={styles.titleTriding}>Tranding Movie</h1>
      <ul className={styles.listTranding}>
        {mov && mov.map(mov => <li className={styles.item} key={mov.id}>
          <img src={`https://image.tmdb.org/t/p/w300/${mov.poster_path}`} alt={mov.title } />
          <Link to={`/movies/${mov.id}`}>
            <p className={styles.titleLink}>{mov.title}</p>
          </Link>
         
        </li>)}
      </ul>
  </div>
  )
}

Home.proptype = {
  id: PropType.number.isRequired,
  title: PropType.string.isRequired,
  poster_path:PropType.node.isRequired
}

export default Home;