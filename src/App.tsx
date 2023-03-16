import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateProduct } from "./pages/CreateProduct";

function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<CreateProduct />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
