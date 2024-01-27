import { useEffect, useState } from 'react';
import axios from 'axios';

import Filters from '../../components/Filters/Filters';
import Pizzas from '../../components/Pizzas/Pizzas';

import cl from './Home.module.scss';

const Home = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectCategory, setSelectCategory] = useState(0);
  const [sortCategory, setSortCategory] = useState({
    title: 'популярности',
    sortProp: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const REQUEST_URL = {
        baseURL: 'https://65624643dcd355c08324b89d.mockapi.io/pizzas',
        params: {
          category: selectCategory === 0 ? '' : selectCategory,
          sortBy: sortCategory.sortProp,
          order: sortCategory.title === 'популярности' ? 'desc' : 'asc',
        },
      };

      const res = await axios.get(REQUEST_URL.baseURL, {
        params: { ...REQUEST_URL.params },
      });
      setIsLoading(false);
      setPizzaData(res.data);
    };

    fetchData();
  }, [selectCategory, sortCategory]);

  return (
    <main className={cl.main}>
      <Filters
        selectCategory={selectCategory}
        sortCategory={sortCategory}
        setSelectCategory={setSelectCategory}
        setSortCategory={setSortCategory}
      />
      <Pizzas pizzaData={pizzaData} isLoading={isLoading} />
    </main>
  );
};

export default Home;
