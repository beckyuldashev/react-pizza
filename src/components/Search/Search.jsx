import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeSearchValue } from '../../redux/slices/filters/filtersSlice';
import { useDebounce } from '../../hooks/useDebounce';

import cl from './Search.module.scss';

const Search = () => {
  const [searchTerm, setSearhTerm] = useState('');
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    dispatch(changeSearchValue(debouncedValue));
  }, [debouncedValue]);

  return (
    <div>
      <input
        className={cl.input}
        type="search"
        value={searchTerm}
        onChange={(e) => setSearhTerm(e.target.value)}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};

export default Search;
