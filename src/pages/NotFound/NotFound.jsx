import { Link } from 'react-router-dom';
import NotFoundError from '../../components/NotFoundError/NotFoundError';

import cl from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main className={cl.wrapper}>
      <NotFoundError title="Ошибка 404. Такой страницы не существует" />
      {/* <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img src={cartImg} alt="" /> */}
      <Link to="/" className="back-link">
        Вернуться назад
      </Link>
    </main>
  );
};

export default NotFound;
