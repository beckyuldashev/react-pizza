import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import Filters from '../../components/Filters/Filters';
import Pizzas from '../../components/Pizzas/Pizzas';
import Pagination from '../../components/Pagination/Pagination';

import { SearchContext } from '../../searchContext';
import { changeFilters } from '../../redux/slices/filters/filtersSlice';
import { sortNames } from '../../components/Sort/Sort';

import cl from './Home.module.scss';

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [pizzaData, setPizzaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { selectCategory, sortCategory, currentPage } = useSelector((state) => state.filters);

  const fetchingPizzas = () => {
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

    const responseData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(REQUEST_URL.baseURL, {
          params: { ...REQUEST_URL.params },
        });

        setPizzaData(res.data);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
        setPizzaData([]);
      } finally {
        setIsLoading(false);
      }
    };

    responseData();
  };

  useEffect(() => {
    if (isMounted.current) {
      const params = qs.stringify({
        selectCategory,
        sortProp: sortCategory.sortProp,
        currentPage,
      });

      navigate(`/?${params}`);
    }

    isMounted.current = true;
  }, [selectCategory, sortCategory.sortProp, currentPage, navigate]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortCategory = sortNames.find((item) => item.sortProp === params.sortProp);
      dispatch(
        changeFilters({
          selectCategory: params.selectCategory,
          currentPage: params.currentPage,
          sortCategory: sortCategory,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      fetchingPizzas();
    }

    isSearch.current = false;
  }, [selectCategory, sortCategory, currentPage, searchValue]);

  return (
    <main className={cl.main}>
      <Filters />
      <Pizzas pizzaData={pizzaData} isLoading={isLoading} />

      <Pagination totalPages={3} />
    </main>
  );
};

export default Home;
