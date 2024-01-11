import pizza from "../../assets/img/pizza.png";

import cl from "./PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={cl.card}>
      <img className={cl.img} src={pizza} alt="pizza" />
      <div className={cl.info}>
        <h3 className={cl.title}>Чизбургер-пицца</h3>
        <div className={cl.variants}>
          <ul className={cl.list}>
            <li className={cl.item + " " + cl.active}>тонкое</li>
            <li className={cl.item}>традиционное</li>
          </ul>
          <ul className={cl.list}>
            <li className={cl.item}>26 см.</li>
            <li className={cl.item}>30 см.</li>
            <li className={cl.item + " " + cl.active}>40 см.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
