import cl from './NotFoundError.module.scss';

const NotFoundError = ({ title }) => {
  return (
    <div className={cl.wrapper}>
      <h1>
        {title}
        <span>😕</span>
      </h1>
    </div>
  );
};

export default NotFoundError;
