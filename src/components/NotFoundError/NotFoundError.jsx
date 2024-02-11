import { Link } from 'react-router-dom';

import cl from './NotFoundError.module.scss';

const NotFoundError = ({ title }) => {
  return (
    <div className={cl.wrapper}>
      <p>
        {title}
        <span>😕</span>
      </p>
      <Link to="/" className="back-link">
        Вернуться назад
      </Link>
    </div>
  );
};

export default NotFoundError;
