import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Filters from '../../components/Filters/Filters';
import Pizzas from '../../components/Pizzas/Pizzas';
import Pagination from '../../components/Pagination/Pagination';

import { SearchContext } from '../../searchContext';

import cl from './Home.module.scss';

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [pizzaData, setPizzaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { selectCategory, sortCategory } = useSelector((state) => state.filters);

  useEffect(() => {
    const REQUEST_URL = {
      baseURL: 'https://65624643dcd355c08324b89d.mockapi.io/pizzas',
      params: {
        page: currentPage,
        limit: 4,
        category: selectCategory === 0 ? '' : selectCategory,
        sortBy: sortCategory.sortProp,
        order: sortCategory.title === 'популярности' ? 'desc' : 'asc',
        title: searchValue,
      },
    };

    setIsLoading(true);

    const fetchData = async () => {
      const res = await axios.get(REQUEST_URL.baseURL, {
        params: { ...REQUEST_URL.params },
      });

      setIsLoading(false);
      setPizzaData(res.data);
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [selectCategory, sortCategory, currentPage, searchValue]);

  return (
    <main className={cl.main}>
      <Filters />
      <Pizzas pizzaData={pizzaData} isLoading={isLoading} />

      <Pagination currentPage={currentPage} totalPages={3} setCurrentPage={setCurrentPage} />
    </main>
  );
};

export default Home;
