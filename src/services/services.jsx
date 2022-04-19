import axios from "axios";
import PropType from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '36a867fb0821ee549130a5bcc22653fa';

export const traidingMovie = async () => { 
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data
  } catch (error) { 
    return error.message
  }
}

traidingMovie.proptype = {
  API_KEY: PropType.string.isRequired
}

export const detailsMovie = async (movId) => { 
  try {
    const response = await axios.get(`/movie/${movId}?api_key=${API_KEY}`);
    return response.data
  } catch (error) { 
    return error.message
  }
}

detailsMovie.proptype = {
  API_KEY: PropType.string.isRequired,
  movId:PropType.number.isRequired
}

export const fetchCast = async (movId) => { 
  try {
    const response = await axios.get(`/movie/${movId}/credits?api_key=${API_KEY}`);
    return response.data
  } catch (error) { 
    return error.message
  }
}

fetchCast.proptype = {
  API_KEY: PropType.string.isRequired,
  movId:PropType.number.isRequired
}

export const fetchReviews = async (movId) => { 
  try {
    const response = await axios.get(`/movie/${movId}/reviews?api_key=${API_KEY}`);
    return response.data.results
  } catch (error) { 
    return error.message
  }
}

fetchReviews.proptype = {
  API_KEY: PropType.string.isRequired,
  movId:PropType.number.isRequired
}

export const fetchSearchMovie = async (query) => { 
  try {
    const response = await axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
    return response.data.results
  } catch (error) { 
    return error.message
  }
}

fetchSearchMovie.proptype = { 
  API_KEY: PropType.string.isRequired,
  query:PropType.string.isRequired
}
