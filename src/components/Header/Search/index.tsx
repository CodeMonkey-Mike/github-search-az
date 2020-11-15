import React, { useState, useCallback, useMemo } from 'react';
import { Search, SearchContainer } from './style';
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { Actions } from '../../../store/Search';

const Main = () => {
  const dispatch = useDispatch();
  const [q, setQ] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
    _debounce(event.target.value);
  };

  const _debounce = useCallback(
    debounce((query: string) => {
      if (query) {
        dispatch(Actions.searchRequest(query));
      } else {
        dispatch(Actions.searchReset());
      }
    }, 500),
    [dispatch]
  );

  useMemo(() => !q && dispatch(Actions.searchReset()), [q, dispatch]);

  return (
    <SearchContainer data-testid="search-wrapper">
      <Search>
        {q ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={() => setQ('')}>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Search</title>
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
        )}
        <input
          data-testid="search-input"
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search by user"
          autoComplete="off"
          onChange={handleChange}
          value={q}
        />
      </Search>
    </SearchContainer>
  );
};

export { Main as Search };
