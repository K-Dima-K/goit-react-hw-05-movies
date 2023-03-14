import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <TrendingMovies />
    </>
  );
};

export default Home;
