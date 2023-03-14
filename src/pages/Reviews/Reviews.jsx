import { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';
import { getReviews } from '../../shared/servises/Api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const results = await getReviews(movieId);

        setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        alert(`Sorry,${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId, error]);

  const element = movies.map(({ content, id, author }) => (
    <li key={id} className={css.item}>
      <h4>{author}</h4>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {movies.length > 0 ? (
        <div className={css.wrapper}>
          <ul className={css.list}>{element}</ul>
        </div>
      ) : (
        <p>Sorry, reviews not found.</p>
      )}
    </>
  );
};

export default memo(Reviews);
