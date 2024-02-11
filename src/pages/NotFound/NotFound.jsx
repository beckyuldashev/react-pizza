import NotFoundError from '../../components/NotFoundError/NotFoundError';

import cl from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main className={cl.wrapper}>
      <NotFoundError title="Ошибка 404. Такой страницы не существует" />
    </main>
  );
};

export default NotFound;
