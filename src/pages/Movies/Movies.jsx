import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { MovieSearch } from '../../shared/servises/Api';
import Loader from '../../shared/components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovie = async () => {
      try {
        setLoading({ loading: true });
        const results = await MovieSearch(query);

        setMovie(results);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [query]);

  const chanceSearch = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm onSubmit={chanceSearch} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;

// const Movies = () => {
//   return <h1>Movies</h1>;
// };

// export default Movies;
