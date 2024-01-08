import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";

import cl from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={cl.filters}>
      <Categories />
      <Sort />
    </div>
  );
};

export default Filters;
