import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import { selectorCart } from '../../redux/slices/cart/cartSlice';

import shopIcon from '../../assets/icons/shop-icon.svg';

import cl from './Header.module.scss';

const Header = () => {
  const { totalPrice, totalCount } = useSelector(selectorCart);

  return (
    <header className={cl.header}>
      <Link to="/" className={cl.logo}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="pizza logo" />
        <div>
          <h1 className={cl.title}>BB pizza</h1>
          <span className={cl.subtitle}>самая вкусная пицца во вселенной</span>
        </div>
      </Link>

      <Search />

      <Link to="/cart" className={cl.cart}>
        <span className={cl.price}>{totalPrice} ₽</span>
        <span className={cl.divider} />
        <div className={cl.count}>
          <img src={shopIcon} alt="" />
          <span>{totalCount}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
