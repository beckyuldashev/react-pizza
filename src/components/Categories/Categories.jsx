import cl from "./Categories.module.scss";

const Categories = () => {
  return (
    <ul className={cl.categories}>
      <li className={cl.item}>
        <button className={cl.btn + " " + cl.active}>Все</button>
      </li>
      <li className={cl.item}>
        <button className={cl.btn}>Мясные</button>
      </li>
      <li className={cl.item}>
        <button className={cl.btn}>Вегетарианская</button>
      </li>
      <li className={cl.item}>
        <button className={cl.btn}>Гриль</button>
      </li>
      <li className={cl.item}>
        <button className={cl.btn}>Острые</button>
      </li>
      <li className={cl.item}>
        <button className={cl.btn}>Закрытые</button>
      </li>
    </ul>
  );
};

export default Categories;
