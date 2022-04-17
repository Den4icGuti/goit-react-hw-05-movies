import { useState,useEffect } from "react"
export const MoviesPage = () => { 
  const [mov, setMov] = useState('')
  
  const onHandleInput = e => { 
    setMov(e.currentTarget.value)
  }

  const Reset = () => { 
    setMov('')
  }

  const Submit = (e) => { 
    e.preventDefault()
    if (mov.trim() === '') { 
      alert('dqdqw')
      return;
    }
    setMov({mov:mov})
    Reset()
  }

  

  return (
    <>
      <form onSubmit={Submit}>
        <input type="text" name="query" value={mov} onChange={onHandleInput} />
        <button type="submit">Search...</button>
    </form>
    </>
  )
}