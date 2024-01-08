import Filters from "../../components/Filters/Filters";

import cl from "./Home.module.css";

const Home = () => {
  return (
    <main className={cl.main}>
      <Filters />
    </main>
  );
};

export default Home;
