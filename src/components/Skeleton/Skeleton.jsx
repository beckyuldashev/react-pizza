import cl from './Skeleton.module.scss';

const Skeleton = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.elem + ' ' + cl.circle}></div>
      <div className={cl.elem + ' ' + cl.title}></div>
      <div className={cl.elem + ' ' + cl.info}></div>
      <div className={cl.footer}>
        <div className={cl.elem + ' ' + cl.price}></div>
        <div className={cl.elem + ' ' + cl.btn}></div>
      </div>
    </div>
  );
};

export default Skeleton;
