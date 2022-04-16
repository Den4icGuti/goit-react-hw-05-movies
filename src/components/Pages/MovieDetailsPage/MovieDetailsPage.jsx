import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailsMovie } from "services/services";

export const MovieDetails = () => { 
  const [mov, setMov] = useState('')
  const { movId } = useParams()
  
  useEffect(() => { 
    detailsMovie(movId).then(setMov)
  },[movId])


  return (
    <div >
      <button>Go Back</button>
      {mov && (
        <>
          <img src={`https://image.tmdb.org/t/p/w300/${mov.poster_path}`} alt={mov.original_title} />
          <h2>{mov.original_title}</h2>
        </>
        
       
      )}
    </div>
  )
}