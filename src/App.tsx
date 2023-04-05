import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateProduct } from './pages/CreateProduct';
import { ContextProvider } from './context/ContextProvider';
function App() {
  return (
    <ContextProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<CreateProduct />} />
        </Routes>
      </HashRouter>
    </ContextProvider>
  );
}

export default App;
