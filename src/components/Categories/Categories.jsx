import { useState } from 'react';

import cl from './Categories.module.scss';

const Categories = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <ul className={cl.categories}>
      {categoryNames.map((category, index) => (
        <li className={cl.item} key={category}>
          <button
            className={selectIndex === index ? cl.btn + ' ' + cl.active : cl.btn}
            onClick={() => setSelectIndex(index)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
