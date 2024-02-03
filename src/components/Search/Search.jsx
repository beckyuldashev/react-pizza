import { useContext, useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { SearchContext } from '../../searchContext';

import cl from './Search.module.scss';

const Search = () => {
  const [searchTerm, setSearhTerm] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    setSearchValue(debouncedValue);
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
