import { useContext } from 'react';

import { SearchContext } from '../../searchContext';

import cl from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div>
      <input
        className={cl.input}
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};

export default Search;
