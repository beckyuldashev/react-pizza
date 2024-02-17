import { useDispatch, useSelector } from 'react-redux';

import { changeCategory, selectorCategory } from '../../redux/slices/filters/filtersSlice';

import cl from './Categories.module.scss';

const Categories = () => {
  const selectCategory = useSelector(selectorCategory);
  const dispatch = useDispatch();

  const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <ul className={cl.categories}>
      {categoryNames.map((category, index) => (
        <li className={cl.item} key={category}>
          <button
            className={selectCategory === index ? cl.btn + ' ' + cl.active : cl.btn}
            onClick={() => dispatch(changeCategory(index))}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
