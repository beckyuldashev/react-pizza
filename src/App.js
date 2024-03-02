import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import PizzaById from './pages/PizzaById/PizzaById'
import MainLaoyout from "./layout/MainLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLaoyout/>}>
        <Route path='' element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='pizza/:id' element={<PizzaById/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
