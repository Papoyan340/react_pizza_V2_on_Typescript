import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/index';
import FullDecPizza from './pages/FullDecPizza';
import { Cart, Home, NotFound } from './pages/index';
import MainLayouts from './layouts/MainLayouts';

import './scss/app.scss';

function App() {
   //  .............. inchpes er araj stexcum component@ start ..................................................
   // return React.createElement('div', {className:"aaa"}, React.createElement('h1',{className: 'big'}, 'arii'))
   //  .............. inchpes er araj stexcum component@ end ....................................................

   // ............... linki hascen imanalu hamar start ..................
   // const pathname = window.location.pathname
   // ............... linki hascen imanalu hamar end ....................

   return (
      // <Routes>
      //    <Route path="/" element={<Home />} />
      //    <Route path="/:id" element={<FullDecPizza />} />
      //    <Route path="/cart" element={<Cart />} />
      //    <Route path="*" element={<NotFound />} />
      // </Routes>
      <Routes>
         <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="/pizzas/:id" element={<FullDecPizza />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
   );
}

export default App;
