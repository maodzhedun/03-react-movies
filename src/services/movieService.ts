import axios from 'axios';
import type { Movie } from '../types/movie';

const myKey = import.meta.env.VITE_TMDB_TOKEN;
const API_URL = 'https://api.themoviedb.org/3/search/movie';
axios.defaults.headers.common['Authorization'] = `Bearer ${myKey}`;

interface MovieHttpResponse {
  results: Movie[];
}

interface FetchMovieParams {
  query: string;
}

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/11' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGFkMGQ4NjQzNDA2ODUwY2Q1M2I4Y2VkMzZlZjczZSIsIm5iZiI6MTc0OTgxOTQ5NS4yMTcsInN1YiI6IjY4NGMyMDY3NjViZjU4MjM0ZDNmZGQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylltS2Rf40wEwc9npeURIECmwIH_JPsJg1NRBX38Xa0'

// {
//     params: {
//       // твої параметри
//     },
//     headers: {
//       Authorization: `Bearer твійТокен`,
//     }
//   }

// const API_KEY = '7dad0d8643406850cd53b8ced36ef73e';

// axios.defaults.params = {
//   api_key: myKey,
// };

export const fetchMovies = async (
  params: FetchMovieParams
): Promise<Movie[]> => {
  const response = await axios.get<MovieHttpResponse>(
    `${API_URL}?query=${params.query}`
  );
  return response.data.results;
};

// export const searchMovies = async (query, page = 1) => {
//   const response = await axios.get(
//     `${BASE_URL}/search/movie?query=${query}&page=${page}`
//   );
//   return response.data;
// };

// export const getMovieDetails = async id => {
//   const response = await axios.get(`${BASE_URL}/movie/${id}`);
//   return response.data;
// };

// export const getMovieCredits = async id => {
//   const response = await axios.get(`${BASE_URL}/movie/${id}/credits`);
//   return response.data.cast;
// };

// export const getMovieReviews = async id => {
//   const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`);
//   return response.data.results;
// };


// import axios from 'axios';

// const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
// axios.defaults.baseURL = 'https://api.pexels.com/v1/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape'
// };
