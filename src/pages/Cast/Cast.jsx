import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../shared/servises/Api';
import Loader from '../../shared/components/Loader/Loader';

import css from './Cast.module.css';

const Cast = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const results = await getMovieCast(movieId);

        if (results.length === 0) {
          alert('Sorry, casts not found');
        }

        setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        return alert(`Sorry,${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId, error]);

  const element = movies.map(({ original_name, profile_path, id }) => (
    <li key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
        alt={original_name}
        loading="lazy"
        className={css.img}
        width="100px"
        height="150px"
      />
      <h3>{original_name}</h3>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}

      {movies && (
        <div>
          <ul className={css.list}>{element}</ul>
        </div>
      )}
    </>
  );
};

export default Cast;
