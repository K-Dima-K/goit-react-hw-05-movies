import React, { useState, useEffect } from 'react';

import MoviesList from '../MoviesList/MoviesList';
import Loader from 'shared/components/Loader/Loader';
import { filmsSearch } from 'shared/servises/Api';

import css from './TrendingMovies.module.css';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const results = await filmsSearch();

        setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        alert(`Sorry,${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies, setLoading, error]);

  return (
    <div className={css.wrapper}>
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default TrendingMovies;
