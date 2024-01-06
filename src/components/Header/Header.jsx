import shopIcon from "../../assets/icons/shop-icon.svg";

import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.logo}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="pizza logo" />
        <div>
          <h1 className={cl.title}>React pizza</h1>
          <span className={cl.subtitle}>самая вкусная пицца во вселенной</span>
        </div>
      </div>

      <button className={cl.cart}>
        <span className={cl.price}>520 ₽</span>
        <span className={cl.divider} />
        <div className={cl.count}>
          <img src={shopIcon} alt="" />
          <span>3</span>
        </div>
      </button>
    </header>
  );
};

export default Header;
