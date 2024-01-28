import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";

import { SearchContext } from "./searchContext";

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="app">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
