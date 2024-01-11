import PizzaCard from "../PizzaCard/PizzaCard";

import cl from "./Pizzas.module.css";

const Pizzas = () => {
  return (
    <section>
      <h2 className={cl.title}>Все пиццы</h2>
      <ul className={cl.list}>
        <li>
          <PizzaCard />
        </li>
        <li>
          <PizzaCard />
        </li>
        <li>
          <PizzaCard />
        </li>
        <li>
          <PizzaCard />
        </li>
        <li>
          <PizzaCard />
        </li>
      </ul>
    </section>
  );
};

export default Pizzas;
