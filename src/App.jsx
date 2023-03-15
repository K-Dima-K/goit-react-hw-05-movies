import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'shared/components/Loader/Loader';
import css from './Container.module.css';

const Navbar = lazy(() => import('components/Navbar/Navbar'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <BrowserRouter basename="goit-react-hw-05-movies">
        <Navbar />
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />}></Route>
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
                <Route
                  path="/movies/:movieId/reviews"
                  element={<Reviews />}
                ></Route>
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
};
