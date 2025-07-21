import { useState } from 'react';
import { type Movie } from '../../types/movie';
import { fetchMovies } from '../../services/movieService';
import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import css from './App.module.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const results = await fetchMovies({ query });

      if (results.length === 0) {
        toast.error('No movies found for your query.');
        return;
      }
      setMovies(results);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className={css.app}>
        <SearchBar onSubmit={handleSearch} />
        {isLoading && <p>Loading data, please wait...</p>}
        {isError && <p>Whoops, something went wrong! Please try again!</p>}
      </div>
    </>
  );
}

export default App;
