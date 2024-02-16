import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';

import cl from './Pizzas.module.scss';

const Pizzas = ({ pizzaData, status }) => {
  const skeletons = [...Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = pizzaData.map((pizza) => (
    <li key={pizza.id}>
      <PizzaCard {...pizza} />
    </li>
  ));

  if (status === 'error') {
    return (
      <section>
        <div className={cl.error}>
          <h3>Произошла ошибка😥</h3>
          <p>Попробуйте перезагрузить приложение</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className={cl.title}>Все пиццы</h2>
      <ul className={cl.list}>{status === 'loading' ? skeletons : pizzas}</ul>
    </section>
  );
};

export default Pizzas;
