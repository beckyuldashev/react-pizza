import { useNavigate, useParams } from 'react-router-dom';

import cl from './PizzaById.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PizzaById = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('https://65624643dcd355c08324b89d.mockapi.io/pizzas/' + id);
        setPizza(res.data);
      } catch (error) {
        console.log(error);
        alert('Такой пиццы нет');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return 'Loading...';

  return (
    <div className={cl.card}>
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h4>{pizza.title}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, itaque.</p>
      <strong>${pizza.price}</strong>
    </div>
  );
};

export default PizzaById;
