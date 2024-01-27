import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';

import cl from './Pizzas.module.scss';

const Pizzas = ({ pizzaData, isLoading }) => {
  return (
    <section>
      <h2 className={cl.title}>Все пиццы</h2>
      <ul className={cl.list}>
        {isLoading
          ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
          : pizzaData.map((pizza) => (
              <li key={pizza.id}>
                <PizzaCard {...pizza} />
              </li>
            ))}
      </ul>
    </section>
  );
};

export default Pizzas;
