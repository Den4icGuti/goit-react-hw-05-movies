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
      {mov && (<div>
        <p>dwqqwd</p>
      </div>)}
    </>
)
} 
