import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropType from 'prop-types';
import { fetchReviews } from "services/services";
import styles from '../Reviews/Reviews.module.css';

export const Reviews = () => { 
  const [mov, setMov] = useState(null);
  const { movId } = useParams()
 
  
  useEffect(() => { 
    fetchReviews(movId)
      .then(setMov)
  }, [movId])
  
  return (
    <>

      {mov && (
        <>
          {mov && (
            <ul>
              {mov && mov.map(mov => <li key={mov.id}>
                <div className={styles.boxReviews}>
                  <h2 className={styles.title}>Author: SWITCH</h2>
                  <p>{mov.content}</p>
                  <h2 className={styles.title}>Author: msbreviews</h2>
                  <p>{mov.author}</p>
                </div>
              </li>)}
            </ul>
          )}
          {mov.length === 0 && (<p>We don't haveany reviews for this movie.</p>)}
        </>)}
    </>
  );
} 
