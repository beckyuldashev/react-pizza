import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import Filters from '../../components/Filters/Filters';
import Pizzas from '../../components/Pizzas/Pizzas';
import Pagination from '../../components/Pagination/Pagination';

import { changeFilters } from '../../redux/slices/filters/filtersSlice';
import { fetchPizzas, selectorPizzas } from '../../redux/slices/pizzas/pizzasSlice';
import { sortNames } from '../../components/Sort/Sort';

import cl from './Home.module.scss';

const Home = () => {
  const { items, status } = useSelector(selectorPizzas);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { selectCategory, sortCategory, currentPage, searchValue } = useSelector(
    (state) => state.filters,
  );

  const getPizzas = () => {
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

    dispatch(fetchPizzas(REQUEST_URL));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const params = qs.stringify({
        selectCategory,
        sortProp: sortCategory.sortProp,
        currentPage,
        title: searchValue,
      });

      navigate(`/?${params}`);
    }

    isMounted.current = true;
  }, [selectCategory, sortCategory.sortProp, currentPage, searchValue, navigate]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortCategory = sortNames.find((item) => item.sortProp === params.sortProp);
      dispatch(
        changeFilters({
          selectCategory: params.selectCategory,
          currentPage: params.currentPage,
          sortCategory: sortCategory,
          title: searchValue,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [selectCategory, sortCategory, currentPage, searchValue]);

  return (
    <main className={cl.main}>
      <Filters />
      <Pizzas pizzaData={items} status={status} />

      <Pagination totalPages={3} />
    </main>
  );
};

export default Home;
