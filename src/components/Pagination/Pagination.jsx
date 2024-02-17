import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage, selectorfilters } from '../../redux/slices/filters/filtersSlice';

import cl from './Pagination.module.scss';

const Pagination = ({ totalPages }) => {
  const { currentPage } = useSelector(selectorfilters);
  const dispatch = useDispatch();

  return (
    <div className={cl.wrapper}>
      <ul className={cl.list}>
        <li>
          <button
            disabled={currentPage === 1}
            className={cl.btn}
            onClick={() => dispatch(changeCurrentPage((prev) => prev - 1))}>
            {'<'}
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              className={currentPage === index + 1 ? cl.btn + ' ' + cl.active : cl.btn}
              onClick={() => dispatch(changeCurrentPage(index + 1))}>
              {index + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage === totalPages}
            className={cl.btn}
            onClick={() => dispatch(changeCurrentPage((prev) => prev + 1))}>
            {'>'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
