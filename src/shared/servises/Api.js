import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '7f6b82d6e6301d2c74dd8fbee3405c81',
  },
});

export const filmsSearch = async (page = 1) => {
  const { data } = await instance.get('/trending/movie/day?', {
    params: {
      page,
    },
  });
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}?`);
  return data;
};

export const MovieSearch = async query => {
  const { data } = await instance.get('/search/movie?', {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieCast = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits?`);
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}//reviews?`);
  return data.results;
};
