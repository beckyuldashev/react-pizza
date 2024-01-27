import cl from './Categories.module.scss';

const Categories = ({ selectCategory, setSelectCategory }) => {
  const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <ul className={cl.categories}>
      {categoryNames.map((category, index) => (
        <li className={cl.item} key={category}>
          <button
            className={selectCategory === index ? cl.btn + ' ' + cl.active : cl.btn}
            onClick={() => setSelectCategory(index)}>
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
