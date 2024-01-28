import NotFoundError from '../NotFoundError/NotFoundError';
import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';

import cl from './Pizzas.module.scss';

const Pizzas = ({ pizzaData, isLoading }) => {
  const skeletons = [...Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = pizzaData.map((pizza) => (
    <li key={pizza.id}>
      <PizzaCard {...pizza} />
    </li>
  ));

  return (
    <section>
      <h2 className={cl.title}>Все пиццы</h2>
      <ul className={cl.list}>
        {isLoading ? (
          skeletons
        ) : pizzas.length > 0 ? (
          pizzas
        ) : (
          <NotFoundError title="Такой пиццы нет" />
        )}
      </ul>
    </section>
  );
};

export default Pizzas;
