import PropTypes from 'prop-types';

import { useState, useEffect, useMemo } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { getMovieDetails } from '../../shared/servises/Api';
import Loader from '../../shared/components/Loader/Loader';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [date, setDate] = useState('');

  const { movieId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/movies';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const results = await getMovieDetails(movieId);

        setMovie(results);

        setGenres(results.genres);

        setDate(results.release_date);
      } catch ({ response }) {
        setError(response.error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, setMovie, setLoading, error]);

  const goBack = () => navigate(from);

  const elements = genres.map(({ name, id }) => <li key={id}>{name}</li>);

  const year = useMemo(() => new Date(date).getFullYear(), [date]);

  return (
    <>
      <button type="button" onClick={goBack} className={css.button}>
        Go back
      </button>
      {loading && <Loader />}
      {movie && (
        <div className={css.wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
            loading="lazy"
            className={css.img}
            width="250px"
            height="300px"
          />
          <div className={css.info}>
            <h2 className={css.title}>
              {movie.original_title}
              <span> ({year})</span>
            </h2>
            <p>User score: {((movie.vote_average / 10) * 100).toFixed(0)}%</p>
            <h3 className={css.topic}>Genres</h3>
            <ul className={css.list}>{elements}</ul>
            <h3 className={css.topic}>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <div className={css.wrapperLink}>
        <Link
          state={{ from }}
          to={`/movies/${movieId}/cast`}
          className={css.link}
        >
          Cast
        </Link>
        <Link
          state={{ from }}
          to={`/movies/${movieId}/reviews`}
          className={css.link}
        >
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetails;

MovieDetails.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string,
};
