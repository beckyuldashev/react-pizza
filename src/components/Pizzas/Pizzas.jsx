import axios from 'axios';
import { useEffect, useState } from 'react';

import PizzaCard from '../PizzaCard/PizzaCard';

import cl from './Pizzas.module.scss';

const Pizzas = () => {
  const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://65624643dcd355c08324b89d.mockapi.io/pizzas');
      setPizzaData(res.data);
    };

    fetchData();
  }, []);

  return (
    <section>
      <h2 className={cl.title}>Все пиццы</h2>
      <ul className={cl.list}>
        {pizzaData.map((pizza) => (
          <li key={pizza.id}>
            <PizzaCard {...pizza} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pizzas;
