import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';

import cl from './Filters.module.scss';

const Filters = ({ selectCategory, sortCategory, setSelectCategory, setSortCategory }) => {
  return (
    <div className={cl.filters}>
      <div className={cl.categoriesWrapper}>
        <Categories selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      </div>
      <Sort sortCategory={sortCategory} setSortCategory={setSortCategory} />
    </div>
  );
};

export default Filters;
