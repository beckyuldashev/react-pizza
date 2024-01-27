import axios from 'axios';
import { useEffect, useState } from 'react';

import PizzaCard from '../PizzaCard/PizzaCard';
import Skeleton from '../Skeleton/Skeleton';

import cl from './Pizzas.module.scss';

const Pizzas = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await axios.get('https://65624643dcd355c08324b89d.mockapi.io/pizzas');
      setIsLoading(false);
      setPizzaData(res.data);
    };

    fetchData();
  }, []);

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
