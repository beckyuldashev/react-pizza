import Filters from '../../components/Filters/Filters';
import Pizzas from '../../components/Pizzas/Pizzas';

import cl from './Home.module.scss';

const Home = () => {
  return (
    <main className={cl.main}>
      <Filters />
      <Pizzas />
    </main>
  );
};

export default Home;
