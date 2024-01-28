import cl from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className={cl.wrapper}>
      <ul className={cl.list}>
        <li>
          <button
            disabled={currentPage === 1}
            className={cl.btn}
            onClick={() => setCurrentPage((prev) => prev - 1)}>
            {'<'}
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              className={currentPage === index + 1 ? cl.btn + ' ' + cl.active : cl.btn}
              onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={currentPage === totalPages}
            className={cl.btn}
            onClick={() => setCurrentPage((prev) => prev + 1)}>
            {'>'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
