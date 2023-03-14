import PropTypes from 'prop-types';

import { useState } from 'react';
// import { GoSearch } from 'react-icons/go';

import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => setSearch(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <input
        name="search"
        value={search}
        required
        placeholder="Search movie"
        className={css.input}
        onChange={handleChange}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
