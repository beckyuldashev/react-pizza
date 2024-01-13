import { useState } from 'react';
import cl from './PizzaCard.module.scss';

const PizzaCard = ({ title, price, imageUrl, sizes, types }) => {
  const [typeSelectedIndex, setTypeSelectedIndex] = useState(types[0]);
  const [sizeSelectIndex, setSizeSelectIndex] = useState(0);
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className={cl.card}>
      <img className={cl.img} src={imageUrl} alt={title} />
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
          <button className={cl.btn}>
            + добавить
            <span>0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
