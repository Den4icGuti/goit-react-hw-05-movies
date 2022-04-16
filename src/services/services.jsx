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

