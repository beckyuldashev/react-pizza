import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, selectCartItem } from '../../redux/slices/cart/cartSlice';

import cl from './PizzaCard.module.scss';
import { Link } from 'react-router-dom';

const typeNames = ['тонкое', 'традиционное'];

const PizzaCard = ({ id, title, price, imageUrl, sizes, types }) => {
  const [typeSelectedIndex, setTypeSelectedIndex] = useState(types[0]);
  const [sizeSelectIndex, setSizeSelectIndex] = useState(0);
  const dispatch = useDispatch();
  const addedCount = useSelector(selectCartItem(id))?.count ?? 0;

  const onAddToCart = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[typeSelectedIndex],
      size: sizes[sizeSelectIndex],
    };

    dispatch(addItem(item));
  };

  return (
    <div className={cl.card}>
      <Link to={`/pizza/${id}`}>
        <img className={cl.img} src={imageUrl} alt={title} />
      </Link>
      <div className={cl.info}>
        <h3 className={cl.title}>{title}</h3>
        <div className={cl.variants}>
          <ul className={cl.list}>
            {types.map((type) => (
              <li
                key={type}
                className={typeSelectedIndex === type ? cl.item + ' ' + cl.active : cl.item}
                onClick={() => setTypeSelectedIndex(type)}>
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul className={cl.list}>
            {sizes.map((size, index) => (
              <li
                key={index}
                className={sizeSelectIndex === index ? cl.item + ' ' + cl.active : cl.item}
                onClick={() => setSizeSelectIndex(index)}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className={cl.footer}>
          <div className={cl.price}>от {price} ₽</div>
          <button className={cl.btn} onClick={onAddToCart}>
            + добавить
            {addedCount > 0 && <span>{addedCount}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
